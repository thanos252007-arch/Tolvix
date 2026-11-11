#!/usr/bin/env python3
"""Live internal-link and page-health audit for Tolvix's sitemap URLs."""
import concurrent.futures
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from threading import Lock

BASE = "https://tolvix.in"
SITEMAP = BASE + "/sitemap.xml"
TIMEOUT = 25
HEADERS = {"User-Agent": "Tolvix-Link-Audit/1.0 (+https://tolvix.in/)"}
cache = {}
cache_lock = Lock()
failures = []

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.ids = set()
        self.title = False
        self.title_text = []
        self.canonical = None
        self.in_title = False
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get("id"): self.ids.add(a["id"])
        if tag == "a" and a.get("name"): self.ids.add(a["name"])
        if tag in ("a", "link") and a.get("href"): self.links.append(a["href"])
        if tag in ("script", "img", "source", "iframe") and a.get("src"): self.links.append(a["src"])
        if tag == "link" and "canonical" in a.get("rel", "").lower().split():
            self.canonical = a.get("href")
        if tag == "title": self.in_title = True
    def handle_endtag(self, tag):
        if tag == "title": self.in_title = False
    def handle_data(self, data):
        if self.in_title: self.title_text.append(data)

def get(url):
    with cache_lock:
        if url in cache: return cache[url]
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as res:
            body = res.read()
            result = (res.status, res.geturl(), res.headers.get("Content-Type", ""), body, None)
    except urllib.error.HTTPError as e:
        result = (e.code, e.geturl(), e.headers.get("Content-Type", ""), b"", str(e))
    except Exception as e:
        result = (0, url, "", b"", str(e))
    with cache_lock: cache[url] = result
    return result

def fail(message):
    failures.append(message)
    print("FAIL:", message)

def main():
    status, final, ctype, body, err = get(SITEMAP)
    if status != 200:
        fail(f"sitemap returned HTTP {status}: {err or final}")
        return 1
    try:
        root = ET.fromstring(body)
        urls = [e.text.strip() for e in root.findall(".//{*}loc") if e.text]
    except Exception as e:
        fail(f"sitemap XML could not be parsed: {e}")
        return 1
    if len(urls) != len(set(urls)): fail("sitemap contains duplicate URL entries")
    tool_urls = [u for u in urls if urllib.parse.urlparse(u).path.startswith("/tools/")]
    guide_urls = [u for u in urls if urllib.parse.urlparse(u).path.startswith("/guides/")]
    print(f"Sitemap: {len(urls)} URLs; {len(tool_urls)} tool pages; {len(guide_urls)} guide pages")
    if len(tool_urls) != 57: fail(f"expected 57 tool pages, found {len(tool_urls)}")
    if len(guide_urls) != 37: fail(f"expected 37 guide pages, found {len(guide_urls)}")
    if len(tool_urls) + len(guide_urls) != 94: fail("sitemap does not contain exactly 94 tool and guide pages")

    # Fetch all sitemap URLs and inspect the 94 tool/guide documents.
    results = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=12) as pool:
        futs = {pool.submit(get, u): u for u in urls}
        for fut in concurrent.futures.as_completed(futs):
            u = futs[fut]
            status, final, ctype, body, err = fut.result()
            results[u] = (status, final, ctype, body, err)
            if status != 200: fail(f"page HTTP {status}: {u} ({err or final})")
            if urllib.parse.urlparse(final).hostname not in ("tolvix.in", "www.tolvix.in"):
                fail(f"page redirects away from Tolvix domain: {u} -> {final}")

    # Parse all tool and guide pages; collect local links and fragment targets.
    checks = []
    for u in tool_urls + guide_urls:
        status, final, ctype, body, err = results.get(u, (0, u, "", b"", "not fetched"))
        if status != 200 or not body: continue
        parser = PageParser()
        try: parser.feed(body.decode("utf-8", errors="replace"))
        except Exception as e:
            fail(f"HTML parse error on {u}: {e}")
            continue
        title = "".join(parser.title_text).strip()
        if not title: fail(f"missing <title>: {u}")
        if not parser.canonical: fail(f"missing canonical: {u}")
        elif urllib.parse.urljoin(u, parser.canonical).rstrip("/") != u.rstrip("/"):
            fail(f"canonical mismatch on {u}: {parser.canonical}")
        for raw in parser.links:
            if not raw or raw.startswith(("#", "mailto:", "tel:", "data:", "javascript:")): 
                if raw.startswith("#") and len(raw) > 1 and raw[1:] not in parser.ids:
                    fail(f"broken same-page fragment {raw} on {u}")
                continue
            target = urllib.parse.urljoin(u, raw)
            parts = urllib.parse.urlsplit(target)
            if parts.scheme not in ("http", "https") or parts.hostname not in ("tolvix.in", "www.tolvix.in"):
                continue
            clean = urllib.parse.urlunsplit((parts.scheme, parts.netloc, parts.path or "/", parts.query, ""))
            fragment = urllib.parse.unquote(parts.fragment)
            checks.append((u, clean, fragment))
    # Fetch unique local destinations, including assets, and validate fragments for HTML pages.
    targets = sorted({t for _, t, _ in checks})
    with concurrent.futures.ThreadPoolExecutor(max_workers=12) as pool:
        fetched = dict(zip(targets, pool.map(get, targets)))
    for source, target, fragment in checks:
        status, final, ctype, body, err = fetched[target]
        if status < 200 or status >= 400:
            fail(f"broken internal link HTTP {status}: {source} -> {target} ({err or final})")
            continue
        if urllib.parse.urlparse(final).hostname not in ("tolvix.in", "www.tolvix.in"):
            fail(f"internal link redirects off Tolvix domain: {source} -> {target} -> {final}")
        if fragment and "html" in ctype.lower() and body:
            p = PageParser()
            p.feed(body.decode("utf-8", errors="replace"))
            if fragment not in p.ids:
                fail(f"broken fragment #{fragment}: {source} -> {target}")

    # www host should redirect to the canonical apex host.
    www_status, www_final, _, _, www_err = get("https://www.tolvix.in/")
    if www_status not in (200, 301, 302, 307, 308) or urllib.parse.urlparse(www_final).hostname != "tolvix.in":
        fail(f"www host did not resolve to apex domain: HTTP {www_status}, {www_final}, {www_err}")

    print(f"Checked {len(tool_urls) + len(guide_urls)} tool/guide pages and {len(checks)} internal link/resource references.")
    print(f"Checked {len(targets)} unique internal destinations (pages and assets).")
    if failures:
        print(f"\nAUDIT FAILED: {len(failures)} issue(s).")
        return 1
    print("\nAUDIT PASSED: all sitemap pages and discovered internal links returned successfully.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
