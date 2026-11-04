# Tolvix — Free Online Tools

Tolvix is a free online tools website built to make everyday text, calculation, developer and productivity tasks simple and accessible.

- **Live website:** https://tolvix.thanos252007.workers.dev/
- **GitHub repository:** https://github.com/thanos252007-arch/Tolvix
- **Hosting:** Cloudflare Workers
- **Budget approach:** ₹0 / free-tier services
- **Primary goal:** Build useful tools, grow genuine organic traffic, and prepare the site for responsible monetization.

> **Project log last updated:** 4 November 2026 (Day 2 user-confirmed testing update)  
> This README is the project’s central progress log. Update it whenever a project change is made: code, tools, SEO, content, deployment, analytics, or monetization preparation.

---

## 1. Project journey

### Initial idea and setup

- Started with the idea of building a free online tools website that could eventually earn through advertising and other legitimate income streams.
- The earlier working project/brand name was **ToolNest**; the chosen brand was later changed to **Tolvix**.
- The project was developed as a lightweight static website using HTML, CSS and JavaScript.
- The site was connected to a GitHub repository and deployed using Cloudflare Workers.
- The project has been developed with a ₹0-budget approach, using a free subdomain rather than purchasing a domain.

### Website and tools

- Built a dark purple/blue visual design for the tools website.
- Added tool discovery through categories, navigation and search.
- The site has been reported as containing approximately 24 tools.
- Tool categories include text utilities, calculators, developer utilities and productivity tools.
- The homepage links to the available tools.

### Analytics and search visibility

- Connected Google Analytics. **Existing Measurement ID must be preserved:** `G-WH86KPZW58`.
- Verified the Tolvix URL-prefix property in Google Search Console.
- Submitted the sitemap successfully.
- The sitemap was reported to contain 27 URLs.
- Updated `robots.txt` and `sitemap.xml` to use the Tolvix Cloudflare Workers hostname.
- Search Console URL indexing requests were submitted for the sitemap URLs. Sitemap acceptance does not mean every URL is indexed.
- Preserve the existing Google Search Console verification file: `google0f5ee12047ee1a4d.html`.
- The earlier ToolNest Search Console property should be retained; do not delete it.

---

## 2. SEO work completed

### Phase 1 — Improve priority pages

The following five priority tool pages were selected for stronger, useful, search-focused content:

| Page | SEO/content work |
|---|---|
| [Word Counter](tools/word.html) | Improved page title and description, helpful introduction, explanation of results, how-to steps, example, FAQs and related links. |
| [JSON Formatter](tools/json.html) | Improved title and description, formatting/minifying/validation guidance, example, common errors, FAQs and related links. |
| [QR Code Generator](tools/qr.html) | Improved title, description, social metadata, structured data, instructions, use cases, FAQs and related links. The page discloses that QR input is sent to the third-party QR service at `api.qrserver.com`; users are warned not to enter confidential information. |
| [GST Calculator](tools/gst.html) | Added India-focused explanations, examples in rupees, formulas, FAQs, disclaimer and related links. |
| [EMI Calculator](tools/emi-calculator.html) | Added loan EMI guidance, how-to steps, example, formula, result explanations, FAQs and related links. |

The Word Counter, JSON Formatter, GST Calculator and EMI Calculator improvements were confirmed in the repository during the latest review. The QR page was also updated and committed.

### Phase 2 — SEO foundations

Work checked or completed:

- Added or reviewed descriptive page titles and meta descriptions on priority pages.
- Reviewed canonical URLs, Open Graph metadata and JSON-LD structured data for the Tolvix hostname.
- Added contextual internal links between related tools on the priority pages.
- Confirmed viewport metadata on the priority pages.
- Confirmed responsive CSS breakpoints in `assets/style.css` for narrower screens.
- Reviewed the homepage tool links and sitemap/robots configuration.

**Limitations:** A full Lighthouse/performance audit and complete device-by-device mobile test have not been confirmed. Do not interpret responsive CSS checks as a measured speed score.

### QR page commit

The QR Code Generator content/SEO update was committed to `main`:

- Commit: `bf2f150d05cb570fb1ecbff312a685b92d87405b`

---

## 3. Current AdSense readiness tracker

This is an internal preparation checklist, not a statement of Google's official minimum requirements.

| # | Requirement | Latest known condition | Status |
|---|---|---|---|
| 1 | Website live and accessible | User checked the live homepage and all four key information/legal pages and confirmed everything is working properly. | ✅ User-verified live pages |
| 2 | 10–15 useful original articles/pages | Five priority tool pages have expanded content. Total qualifying pages/articles has not been audited. | 🟡 In progress |
| 3 | All tools working properly | User confirms the website is working properly; a separate exhaustive test of every tool and edge case is still recommended. | 🟡 General check passed; exhaustive tool audit pending |
| 4 | About Us | Expanded About page checked on the live website by the user. | ✅ User-verified live |
| 5 | Contact Us | Contact page checked on the live website by the user. | ✅ User-verified live |
| 6 | Privacy Policy | Privacy page checked on the live website by the user. | ✅ User-verified live |
| 7 | Terms of Use | Terms page checked on the live website by the user. | ✅ User-verified live |
| 8 | Navigation and internal links | User confirmed the key pages are working; a complete audit of every tool-page link remains. | 🟡 Key navigation checked; full audit pending |
| 9 | Mobile experience | Responsive CSS and viewport settings were confirmed; complete manual mobile testing remains. | 🟡 Test |
| 10 | Genuine traffic and analytics | A previous project check reported 10 Analytics users (5 India and 5 US). This is an earlier snapshot, not a live/current count and not necessarily organic traffic. | 🟡 Monitor |

### AdSense application plan

Target: **complete the readiness checks and aim to apply within about 14 days of the 4 November 2026 planning review**, if the site is genuinely ready.

This is a project target, not a guaranteed deadline. Google does not publish a guaranteed minimum visitor count for AdSense approval. Traffic growth should continue alongside preparation; approval is decided by Google and is not guaranteed.

---

## 4. Phase 3 — Traffic growth (in progress)

Goal: work towards the first **1,000 genuine organic visitors**.

Planned work:

1. Publish genuinely useful, original articles that answer real search queries.
2. Add relevant internal links from articles to tools and between related tools.
3. Improve tool landing-page explanations, examples and FAQs where useful.
4. Share Tolvix in relevant communities without spam or fake traffic.
5. Track impressions, clicks and indexing in Google Search Console.
6. Track users and traffic sources in Google Analytics.
7. Focus on pages that earn real impressions and improve them based on evidence.

Milestones:

- [ ] First 100 genuine visitors
- [ ] First 500 genuine visitors
- [ ] First 1,000 genuine organic visitors
- [ ] Identify the five tools attracting the most organic traffic

---

## 5. Day 1 work log — 5 November 2026\n\nCompleted in GitHub on `main`:\n\n- Expanded the About page with the site's purpose, approach, improvement process and feedback route.\n- Clarified the Contact page and kept GitHub Issues as the published contact/support route. No email address was invented.\n- Reviewed and updated the Privacy Policy to describe local tool processing, the external QR provider, Analytics, hosting and the AI text utility accurately.\n- Created `terms.html` with terms covering acceptable use, tool accuracy, no professional advice, third-party services, availability, intellectual property and liability.\n- Added Terms of Use links to the homepage footer and the About, Contact, Privacy and Terms navigation/footer.\n- Added `/terms.html` to `sitemap.xml`.\n- Preserved Google Analytics Measurement ID `G-WH86KPZW58`.\n\n**Deployment update (user-confirmed, 5 November 2026):** the user confirmed that Cloudflare has deployed the latest GitHub changes. The deployment status is therefore marked as confirmed based on the user's dashboard check. The live homepage and individual pages still need a browser check from a normal network to verify that each route loads and displays correctly. A complete desktop/mobile and tool-functionality test is also still pending.\n\n## Day 2 work log — tool functionality smoke test and source audit

A code-level test was run against the current `assets/tools.js` from `main` using a simulated DOM. This exercises the shared tool dispatcher without claiming a real browser session.

**Completed checks:**
- Ran normal-input smoke tests for 22 shared tool handlers: Word Counter, Case Converter, Duplicate Remover, Extra Spaces, Find & Replace, Line Sorter, Text Reverser, Slug Generator, JSON Formatter, Discount Calculator, Percentage Calculator, Age Calculator, GST Calculator, BMI Calculator, URL Encoder, Base64 handler, CSV to JSON, JSON to CSV, EMI Calculator, Tip Calculator, Password Generator and Word Frequency.
- Confirmed expected sample outputs for most handlers, including word counts, text transformations, JSON formatting, GST, BMI, EMI, CSV conversion and word frequency.
- Reviewed the separate AI Detector & Humanizer inline script and its minimum-input, analyze, rewrite and clear handlers at source level.
- Reviewed the QR Generator input validation, image URL construction and download flow at source level.
- Confirmed that the shared tool pages load `/assets/tools.js` and use `data-run` handlers; AI Detector uses its own inline script.
- Identified that most standard tool pages do not provide a dedicated Reset/Clear button; AI Detector does.

**Important limitations and issues found:**
- This was a source/dispatcher smoke test, not a real browser automation run. The live Worker could not be fetched from the test environment, so actual deployed JavaScript console errors, browser rendering, QR third-party availability and QR image download were not independently verified.
- The browser-only Base64 and secure-password paths need a real-browser check because the isolated test runtime does not provide the same browser APIs.
- Input validation needs improvement: empty values can be treated as zero in some calculators (notably Discount and GST; also review Percentage and Tip). These should be fixed and retested before marking the full tool audit complete.
- QR generation depends on the external `api.qrserver.com` service. The request and download must be verified in a normal browser.
- AI Detector was source-reviewed, not functionally executed end-to-end.

**Day 2 update:** fixed input validation in Discount, Percentage, GST and Tip calculators. The updated shared script was fetched again from `main` and all four revised handlers were confirmed present. A deterministic JavaScript smoke test with a simulated DOM passed **17/17 cases**: valid calculations plus blank, negative, out-of-range, zero-denominator and fractional-person inputs. This verifies handler logic in an isolated runtime, not in a real browser. Attempts to open the four live Cloudflare tool URLs from the test environment were unsuccessful, so deployment and browser rendering remain unverified here. The user previously confirmed the site deployment; still perform a real-browser check of the four calculators.

### AI Detector & Humanizer review — 5 November 2026

Reviewed `tools/ai-detector.html` and its inline JavaScript on `main`.

- Confirmed the page enforces an 80-character minimum and 12,000-character maximum.
- Confirmed analysis checks sentence-length variation, vocabulary repetition and selected formulaic phrases; the displayed score is explicitly described as a heuristic style-signal score, **not** an AI probability or proof of authorship.
- Confirmed the clarity editor applies local phrase substitutions and whitespace cleanup; the page warns users to review edits for meaning.
- Confirmed results are inserted with `textContent`, and the page states that pasted text is processed locally rather than sent to an AI API. Google Analytics remains present for ordinary site usage measurement.
- Reviewed the Clear and Copy handlers. Clipboard copying depends on browser clipboard permissions/secure-context support.
- Found and fixed a text-integrity issue: the humanizer previously inserted a space after punctuation immediately followed by a letter, which could corrupt URLs and email addresses (for example, `example.com`). Removed that broad punctuation-spacing rule while retaining whitespace cleanup.
- Fix commit: `68b8d81964ab5489959c19119d70b7c2146448ca`.

**Testing status:** this is a source-level review and targeted code fix. The analysis/rewrite flows, clipboard behavior and URL preservation still require a real-browser test on the deployed Cloudflare page. The tool must not be marketed as a reliable AI detector or as a way to bypass AI detectors; its current heuristic score cannot establish authorship.

## Website navigation, performance and accessibility audit — 5 November 2026

A repository/source audit was performed against the current `main` branch. This is a static inspection of the HTML, CSS and JavaScript—not a live browser crawl.

### Navigation and internal links

- Checked the homepage's 24 tool-card destinations against the repository file tree: all 24 target HTML files exist.
- Checked the primary Home, About, Contact and Privacy navigation targets: corresponding files exist.
- Checked the internal related-tool links found on the expanded Word Counter, JSON Formatter, GST Calculator and EMI Calculator pages: their target tool files exist.
- **Issue found:** tool-page header/footer navigation is inconsistent with the legal-page navigation. Most tool pages omit a Terms of Use link in their header and footer, even though the homepage and legal pages link to Terms. This is a consistency gap, not a missing target page.
- **Issue found:** most of the 24 tool pages have no contextual related-tool links. Related links are currently concentrated on a small number of expanded pages.
- No missing homepage tool-card target or broken related-tool target was found in the files inspected. This does not prove every URL works on the deployed Worker.

### Performance and technical source checks

- Shared stylesheet: `assets/style.css` is approximately 4.8 KB.
- Shared tool logic: `assets/tools.js` is approximately 9.8 KB.
- Logo: `assets/tolvix-mark.svg` is approximately 1.2 KB.
- No large local raster-image library was found in the repository tree. The QR image is generated from the external QR service at runtime.
- Most standard tool pages load the shared `assets/tools.js`; AI Detector uses its own inline script.
- Google Analytics is loaded on the homepage and content/tool pages. It is an external script and may affect page loading; it is retained to preserve measurement ID `G-WH86KPZW58`.
- CSS includes responsive breakpoints at 800px and 560px, and visible keyboard focus styling for the homepage search input.
- The inspected source uses labels for form inputs on standard tools, and several pages use live status/result regions. A complete WCAG audit has not been performed.

### Not verified in this environment

- Live page load timings, Core Web Vitals or Lighthouse scores.
- Real browser console errors, network failures or missing deployed assets.
- Whether every navigation link works after Cloudflare deployment.
- Actual image transfer sizes after compression/response headers.
- Keyboard-only navigation and screen-reader behavior across all pages.
- Mobile rendering on physical devices.

These checks require a real browser session against the deployed Worker. Do not record them as passed based only on source inspection.

## Navigation fixes — 5 November 2026

Updated all 24 tool pages in `/tools/` on `main`.

- Added a consistent Terms of Use link to each tool page's header navigation and footer.
- Added contextual related-tool links to each tool page, using existing tool URLs.
- Kept existing tool functionality, page content, analytics ID and privacy links intact.
- Re-fetched a sample of updated pages (Age, AI Detector, Base64, BMI, Text Case Converter and CSV to JSON) and confirmed Terms links appear in both header and footer and each page includes its related-tools section.
- The edits are committed individually to `main`; Cloudflare deployment is not independently confirmed.

### Live browser / Lighthouse / mobile audit status

Attempted to open the deployed homepage and representative tool pages through the available web access, but the Cloudflare Worker returned an inaccessible/internal-error response to this environment. No browser automation, Lighthouse or PageSpeed tool is connected in this session. Therefore:

- Live HTTP status and every deployed internal link: **not verified**.
- Browser console and network errors: **not verified**.
- Lighthouse performance/accessibility/SEO scores and Core Web Vitals: **not measured**.
- Real mobile viewport/device behavior: **not tested**.

These are explicitly left open rather than marked as passed. After Cloudflare deploys the new commits, complete a browser-based crawl and Lighthouse run on desktop and mobile before treating this audit as finished.

## PageSpeed Insights results — 4 November 2026

The user shared Google PageSpeed Insights reports for the Tolvix homepage (`https://tolvix.thanos252007.workers.dev/`) captured on 4 November 2026 at 3:09:42 PM. These are Lighthouse lab results from the supplied screenshots.

| Metric | Mobile | Desktop |
|---|---:|---:|
| Performance | **97** | **100** |
| Accessibility | **100** | **100** |
| Best Practices | **100** | **100** |
| SEO | **100** | **100** |
| First Contentful Paint (FCP) | 0.8 s | 0.2 s |
| Largest Contentful Paint (LCP) | 0.8 s | 0.2 s |
| Total Blocking Time (TBT) | 90 ms | 20 ms |
| Cumulative Layout Shift (CLS) | 0 | 0 |
| Speed Index | 4.1 s | 0.3 s |

**Interpretation:**
- The supplied reports show excellent Lighthouse scores. Desktop scored 100 in all four categories; mobile scored 97 for Performance and 100 in the other three.
- The mobile Performance score is already strong. The Speed Index (4.1 s) is the most noticeable metric to investigate next; the report also flags render-blocking resources and reduced unused JavaScript (estimated savings shown by Lighthouse as approximately 150 ms and 74 KiB respectively in the mobile report).
- CLS is 0 in both reports, and lab LCP/FCP are very fast in these test runs.
- PageSpeed's “Discover what your real users are experiencing” section displays **No Data**. Therefore, these screenshots do **not** establish field Core Web Vitals or real-user experience. The timings above are Lighthouse lab measurements, not CrUX field data.
- The screenshots are for the homepage only. They do not certify every tool page, internal link, browser console, or device layout.

**Status:** PageSpeed/Lighthouse homepage audit is measured from user-supplied screenshots. On 4 November 2026, the user confirmed that live functionality testing, mobile/browser testing and performance review/improvements are all working properly. This is recorded as user-confirmed, not independently reproduced in this environment. No risky performance changes were made because the existing scores are already strong. A separate automated live internal-link crawl and field Core Web Vitals data remain unverified. Re-run PageSpeed after any material performance changes and collect field data as real-user traffic becomes available.

---

## Day 3 work log — content audit, guides and search visibility — 4 November 2026

### Repository content audit

Audited the repository tree and inspected all 24 tool-page HTML files for explanatory content, instructions, examples and FAQs.

- Repository contains **24 tool pages**, plus homepage, About, Contact, Privacy, Terms and a 404 page.
- Before today's additions, there were **0 standalone editorial guides** in a guides/articles directory.
- Five tool pages have more developed educational copy: Word Counter, JSON Formatter, QR Code Generator, GST Calculator and EMI Calculator. They contain roughly 447–523 visible words each, with how-to guidance, examples and FAQs.
- The remaining 19 tool pages are comparatively brief (the sampled pages generally contain about 110–158 visible words) and mostly have a short “How to use” section and related links, but no dedicated FAQ/example section.
- Improvement opportunity: expand those 19 pages selectively with unique use cases, worked examples, limitations/privacy details and relevant FAQs. Do not add filler or duplicate copy merely to increase word count.

### Two original guides published

Created and committed:
1. `guides/format-json-online.html` — beginner guide to formatting, minifying and validating JSON, with before/after examples, common syntax errors, FAQs and links to JSON/CSV tools.
2. `guides/calculate-gst-india.html` — India-focused GST arithmetic guide with inclusive/exclusive formulas, worked rupee examples, CGST/SGST/IGST context, FAQs, appropriate tax-advice caveats and links to Tolvix calculators.

Both pages include unique titles/descriptions, canonical URLs, Open Graph metadata, Article structured data, responsive shared stylesheet, existing Google Analytics ID and internal navigation. Both were added to the homepage guide section and sitemap.

Commits:
- JSON guide: `b64db22c8a5fa719d20fbe6a97cdf2ae95a9a924`
- GST guide: `667a7b9dca5dd3153ba43b5e59a1e972a71e5dfa`
- Sitemap and homepage guide links were updated after the article commits.

### Google Search Console and Analytics access status

- Repository review confirms the sitemap contains the existing site URLs; the two new guide URLs have now been added.
- A public search query for the Tolvix hostname did not return results in the search engine used for this check. This is **not** a definitive indexing test; search operators can omit pages.
- Google Search Console's private indexing, impressions, clicks and performance reports could not be read from the available connected tools in this session.
- Google Analytics property reports, current users, page views, top pages and acquisition sources could not be read from the available connected tools in this session.
- Therefore no current traffic baseline or top-performing-page ranking is claimed. Do not invent traffic numbers. The next reliable step is to connect an authorized Search Console/Analytics reporting integration or inspect the account reports directly.

### Day 3 status

- [x] Audit repository page inventory and content depth across all 24 tool pages.
- [x] Identify five expanded educational tool pages and 19 comparatively brief pages.
- [x] Publish two original SEO-oriented guides.
- [x] Add guide links to homepage.
- [x] Add both guide URLs to sitemap.
- [ ] Confirm Cloudflare deployment of the new guide commits.
- [ ] Verify both guide URLs in a real browser after deployment.
- [ ] Inspect Search Console indexing, impressions and clicks.
- [ ] Inspect Analytics traffic, top pages, acquisition sources and establish a measured baseline.

## 6. Next actions

- [x] Confirm latest GitHub changes deployed on Cloudflare Workers (user confirmed on 5 November 2026).
- [x] Review/update About, Contact and Privacy Policy source files; create Terms of Use page and add links in homepage/footer/navigation.\n- [ ] Verify all four pages on the live Cloudflare website after deployment.
- [x] Audit the website content depth: 24 tool pages reviewed; five expanded tool guides and 19 comparatively brief tool pages identified. Two standalone guides added on 4 November 2026.
- [x] Add calculator validation for empty/invalid values (Discount, GST, Percentage and Tip); source re-fetched and changes confirmed.
- [x] User confirmed live calculator functionality is working properly (4 November 2026); not independently reproduced in this environment.
- [x] User confirmed live functionality testing of the tools is working properly (4 November 2026); retain the code-level test record above as separate evidence.
- [x] User confirmed live tool functionality is working properly, including the website's tools (4 November 2026); QR third-party request/download not independently inspected here.
- [x] User confirmed live functionality testing is working properly (4 November 2026); AI Detector browser behavior not independently inspected here.
- [x] User confirmed mobile/browser testing is working properly (4 November 2026); not independently reproduced on a physical device here.
- [x] Add consistent Terms of Use navigation/footer links to all 24 tool pages.\n- [x] Add relevant contextual related-tool links to all 24 tool pages.\n- [ ] Run an automated live crawl of every internal link after deployment (user reports the site is working; automated exhaustive crawl remains unverified).
- [ ] Review Google Analytics traffic sources and current user counts (account report access not available in this session).
- [ ] Review Google Search Console indexing, impressions and clicks (account report access not available in this session).
- [x] Run PageSpeed Insights for the homepage on mobile and desktop; record Lighthouse lab scores and timings above.\n- [ ] Re-run PageSpeed on representative tool pages and inspect field Core Web Vitals when real-user data becomes available.\n- [x] User confirms mobile/browser checks are working properly (4 November 2026); detailed console/network log was not independently captured in this environment.\n- [ ] Complete a dedicated keyboard-only and screen-reader accessibility audit (not explicitly confirmed yet).\n- [ ] Verify the two new guide pages are deployed and inspect their live rendering.
- [ ] Complete the final AdSense readiness review before applying.

---

## 7. Important project details to preserve

- Keep the brand name **Tolvix** consistently across the site.
- Keep the current Cloudflare Workers hostname unless a deliberate migration is planned.
- Preserve Google Analytics ID `G-WH86KPZW58`.
- Preserve Search Console verification file `google0f5ee12047ee1a4d.html`.
- Preserve working tool functionality when improving design or SEO.
- Keep the project within the ₹0 budget wherever practical.
- Do not remove the older ToolNest Search Console property.
- Do not use fake traffic, spam backlinks, copied articles or misleading claims.
- Do not claim a page is indexed, deployed, tested or AdSense-approved without checking.

## 8. README maintenance rule

**Update this README after every meaningful Tolvix change.**

For each update:
1. Add the change under the relevant phase or project-history section.
2. Update the AdSense checklist if a requirement changes status.
3. Update the next-actions list when tasks are completed or new tasks appear.
4. Record important deployment or Git commit details when verified.
5. Include the date of the update.
6. Keep previous milestones as history rather than silently deleting them.

---

*This document records the project information and progress confirmed in the project conversation up to 5 November 2026. Items explicitly marked “verify” or “not verified” must be checked before being treated as complete.*
