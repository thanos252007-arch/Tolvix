# Tolvix — Free Online Tools

Tolvix is a free online tools website built to make everyday text, calculation, developer and productivity tasks simple and accessible.

- **Live website:** https://tolvix.in/
- **GitHub repository:** https://github.com/thanos252007-arch/Tolvix
- **Hosting:** Cloudflare Workers
- **Budget approach:** ₹0 / free-tier services
- **Primary goal:** Build useful tools, grow genuine organic traffic, and prepare the site for responsible monetization.

> **Project log last updated:** 10 November 2026 (homepage search-intent improvement and SEO source review)
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
- The original core site contained 24 tools; Image to Base64 and 18 additional tools were subsequently added, bringing the homepage inventory to 43 tool cards.
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
| 2 | Useful original content | User confirmed the latest 10 expanded guides and 38 expanded tool pages work on the live site (5 November 2026). | ✅ User-verified live content |
| 3 | All tools working properly | User reports all 43 tools were tested on the live site and are working properly (5 November 2026). This is user-confirmed, not independently reproduced here. | ✅ User-confirmed 43/43 |
| 4 | About Us | User confirmed the revised About page is working on the live site (5 November 2026). | ✅ User-verified live |
| 5 | Contact Us | User confirmed the revised Contact page is working on the live site (5 November 2026). | ✅ User-verified live |
| 6 | Privacy Policy | User confirmed the revised Privacy Policy is working on the live site (5 November 2026); update again when AdSense and any consent platform are actually configured. | ✅ User-verified live; future ad update required |
| 7 | Terms of Use | Terms page checked on the live website by the user. | ✅ User-verified live |
| 8 | Navigation and internal links | Source spot-check of homepage, About, Contact, Privacy, Terms, one guide and two tool pages confirms all four legal/trust footer links, page titles and canonical tags. User reports the latest pages work live; exhaustive all-page crawl remains open. | 🟡 Template spot-check passed; full crawl pending |
| 9 | Mobile experience | User confirmed mobile/browser testing is working properly (5 November 2026); a dedicated keyboard-only and screen-reader audit remains. | 🟡 User-confirmed mobile checks; accessibility audit pending |
| 10 | Genuine traffic and analytics | A previous project check reported 10 Analytics users (5 India and 5 US). This is an earlier snapshot, not a live/current count and not necessarily organic traffic. | 🟡 Monitor |

### AdSense application plan

Target: **19 November 2026**, 14 days after the 5 November 2026 preparation challenge began, if the site is genuinely ready.

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


### Additional tool added — 4 November 2026

- Added `tools/image-to-base64.html`, a browser-based Image to Base64 converter.
- Supports image files up to 5 MB, generates a Base64 data URL, and provides copy and text-download actions.
- Uses the browser FileReader API; selected image contents are not uploaded to a Tolvix or third-party conversion endpoint. Google Analytics remains active for site measurement.
- Includes input validation, accessible status feedback, usage instructions, privacy/size-limit notes, FAQs, related-tool links, canonical metadata and WebApplication structured data.
- Added the tool to the homepage (now 25 tools) and to `sitemap.xml`.
- GitHub page commit: `bd1e1661b14ec202ead6f6c89d1545b3f78c79fb`.
- Live Cloudflare deployment and real-browser behavior still need confirmation; source changes alone do not prove deployment.


### 18 additional tools added — 4 November 2026

Added 18 new tool pages and one shared browser-processing script:

- **Image tools (6):** Image Compressor, Universal Image Converter, Image Cropper, Image Resizer, JPG to PNG, PNG to JPG.
- **PDF tools (8):** Merge PDF, Split PDF, PDF to Image, Image to PDF, PDF Watermark, PDF Page Numbering, PDF Metadata Editor, Add Text to PDF.
- **Developer / number tools (4):** HTML Minifier, CSS Minifier, JavaScript Minifier, Binary / Decimal / Hex Converter.
- Shared implementation: `assets/advanced-tools.js`; PDF operations use pdf-lib from jsDelivr and PDF rendering uses PDF.js from cdnjs. Final shared-processing hardening commit: `d302ba264af1d65a5feded0b5e417d613deaf894`.
- Added all 18 cards to the homepage and all 18 URLs to `sitemap.xml`; homepage tool count is now 43.
- Image processing is local in the browser. PDF document processing is local after the PDF libraries load. Large images are limited to 25 MB in the shared image workflow.
- CSS and HTML minifiers use conservative whitespace reduction; HTML raw-text blocks (script, style, pre and textarea) are preserved. JavaScript minification uses Terser in the browser. Review all minified output before production use.
- **Validation status:** GitHub source files were committed. Full real-browser functional testing, PDF edge-case testing, CDN availability checks and Cloudflare live deployment confirmation remain pending. Additional source safeguards were added on 4 November: PDF.js worker URL is explicitly configured; PDF inputs are capped at 50 MB and PDF-to-image at 100 pages; image outputs are capped at 25 megapixels and JPEG conversions use a white background unless a PNG-to-JPG background is selected. HTML minification now preserves script/style/pre/textarea contents. Do not treat these as fully browser-verified until tested on the live site.

## 6. Next actions

- [x] Confirm latest GitHub changes deployed on Cloudflare Workers (user confirmed on 5 November 2026).
- [x] Review and expand About, Contact and Privacy Policy; user confirmed the revised live pages work on 5 November.
- [x] Create Terms of Use page and add links in homepage/footer/navigation; user confirmed the pages work live.
- [x] Complete the latest content audit: 10 standalone guides reviewed and expanded; 38 of 43 tool pages received task-specific educational content on 5 November. The earlier 24-page audit remains as historical context.
- [x] Add calculator validation for empty/invalid values (Discount, GST, Percentage and Tip); source re-fetched and changes confirmed.
- [x] User confirmed live calculator functionality is working properly (4 November 2026); not independently reproduced in this environment.
- [x] User confirmed live functionality testing of the tools is working properly (4 November 2026); retain the code-level test record above as separate evidence.
- [x] User confirmed live tool functionality is working properly, including the website's tools (4 November 2026); QR third-party request/download not independently inspected here.
- [x] User confirmed live functionality testing is working properly (4 November 2026); AI Detector browser behavior not independently inspected here.
- [x] User confirmed mobile/browser testing is working properly (4 November 2026); not independently reproduced on a physical device here.
- [x] Add consistent Terms of Use navigation/footer links to all 24 tool pages.
- [x] Add relevant contextual related-tool links to all 24 tool pages.
- [ ] Run an automated live crawl of every internal link after deployment (user reports the site is working; automated exhaustive crawl remains unverified).
- [ ] Review Google Analytics traffic sources and current user counts (account report access not available in this session).
- [ ] Review Google Search Console indexing, impressions and clicks (account report access not available in this session).
- [x] Run PageSpeed Insights for the homepage on mobile and desktop; record Lighthouse lab scores and timings above.\n- [ ] Re-run PageSpeed on representative tool pages and inspect field Core Web Vitals when real-user data becomes available.\n- [x] User confirms mobile/browser checks are working properly (4 November 2026); detailed console/network log was not independently captured in this environment.\n- [ ] Complete a dedicated keyboard-only and screen-reader accessibility audit (not explicitly confirmed yet).\n- [x] User confirmed the latest expanded guides, tool-page content and About/Contact/Privacy pages work live (5 November 2026).
- [x] User confirmed all 43 tools, including image and PDF tools, work on the live site (5 November 2026); detailed edge-case and console/network logs were not independently captured.\n- [ ] Complete the final AdSense readiness review before applying.

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


## Day 1 content quality review — 5 November 2026

Completed on GitHub `main`:

- Reviewed all 10 standalone SEO guides. Added topic-specific explanations, worked comparisons, practical checklists, troubleshooting advice and limitations. The updated guide pages now contain approximately 399–870 visible words each, depending on topic; this is a content-depth check, not a search-ranking guarantee.
- Expanded 38 of the 43 tool pages with original, task-specific guidance. Topics include formulas and interpretation for calculators; safe handling and review steps for text and developer utilities; format and quality decisions for image tools; and page-order, metadata, watermark, annotation and verification guidance for PDF tools. Five already-developed pages (Word Counter, JSON Formatter, GST Calculator, QR Code Generator and Image to Base64) were retained without adding filler.
- Rewrote the About page to explain the tool categories, design/review approach, editorial scope and corrections route.
- Rewrote the Contact page to explain how to report bugs, what information to include, that GitHub Issues are public, and not to post confidential information. No fake email address was added.
- Expanded the Privacy Policy to describe hosting request data, Google Analytics, the QR Code Generator's external API, browser processing libraries and how future advertising cookies/partners may work. The advertising wording is conditional because AdSense is not yet enabled. When ads are actually activated, update this policy to match the exact ad products, consent controls and regional requirements in use.
- Preserved tool markup, JavaScript handlers, routes, canonical URLs, analytics ID and sitemap paths; these were content-only edits.

### Source validation and limits

- Re-fetched the edited guide, information and tool files from `main` and checked that the added sections and headings are present.
- Sampled visible word counts after edits. Most expanded short tool pages now have roughly 210–330 visible words; the longer core tools remain more detailed. Word count alone does not establish content quality or AdSense eligibility.
- No tool logic or upload behavior was changed in this pass.
- **Pending:** Cloudflare deployment and live browser review of the updated content, privacy wording and page layout. The user's earlier confirmation that all 43 tools work remains a user-confirmed functionality test; this content pass has not been independently tested in a live browser.


## Day 2 AdSense policy and traffic-safety review — 5 November 2026

Reviewed current Google AdSense policy guidance and spot-checked the live-site source templates:

- Checked the homepage, About, Contact, Privacy, Terms, one SEO guide, Word Counter and Image Compressor page. All eight source files contain a footer with About, Contact, Privacy and Terms links, a page title and a canonical link. This is a representative template spot-check, not an exhaustive crawl of every URL.
- The user confirmed the latest legal/trust pages and all 43 tools are working on the live site. Record this as user-confirmed, not as an independent browser test.
- No AdSense ad code or ad placements have been added. Do not add ads until the account is approved and placement can be designed safely.
- Placement guardrails for launch: ads must be clearly distinguishable from Tolvix tool controls, menus, upload/download buttons and results; never place ads where a tap could be mistaken for a tool action; do not use arrows or copy that encourages ad clicks; keep publisher content greater than advertising/promotional material; avoid disruptive pop-ups, forced redirects or automatic downloads.
- Traffic guardrails: never click Tolvix's own ads, ask friends to click, buy paid-to-click traffic, use bots, click exchanges or incentivised visits. Monitor unusual traffic/click patterns in AdSense after approval and follow Google's invalid-traffic guidance.
- Consent readiness: the earlier GA4 country snapshot included Sweden. Before serving personalized ads to visitors in the EEA, UK or Switzerland, choose and correctly configure a Google-certified CMP integrated with the IAB TCF. Google also requires legally valid consent for cookies/local storage where applicable and for ad-personalisation data use. Do not install an unnecessary banner now; configure and test the CMP before ads are served to those regions.
- The Privacy Policy currently says AdSense is not enabled. When an AdSense account and consent setup are actually configured, update the policy to name the real services, cookies/data uses, vendor information and user choices.

Official guidance reviewed: Google AdSense Program policies, invalid-traffic guidance, Google publisher CMP requirements for EEA/UK/Switzerland, and Google's site-readiness/UX guidance. See the official policy links in the project notes before launch.

### Next action

Use Google Search Console Performance (Search results, last 28 days) and Indexing → Pages to establish the genuine organic-search baseline and identify any indexing problems. This requires the user's Search Console report/screenshots; no private Search Console account data was available through the connected tools during this review.

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


### New image/PDF error fixes — 4 November 2026

The user reported two reproducible problem categories in the new tools: image tools displayed **“Invalid image”**, and PDF tools displayed a **library error**.

- Updated the shared image loader to return a more useful decoding error, revoke temporary object URLs on both success and failure, and verify that the browser decoded non-zero image dimensions.
- Image tools and Image to PDF now accept common image MIME types or known image file extensions (PNG, JPG/JPEG, WebP, GIF, BMP and SVG). Unsupported formats such as HEIC/HEIF receive a clear browser-compatibility message rather than the generic “Invalid image” message.
- Added automatic PDF library fallback: if pdf-lib is unavailable from jsDelivr, the script tries the same pinned version from unpkg. PDF.js page rendering similarly has a fallback CDN and matching worker URL.
- PDF tools now check/load the required library before processing; metadata loading also goes through the shared loader.
- Shared JavaScript was re-fetched from `main` after the change and passed a JavaScript syntax parse check.
- Fix commit: `9f9e17eb3ea71c0fb40ae283b34274fab4187d33`.

**Important testing status:** this is a source-level resilience fix. It does not prove either CDN is reachable on the user's device or that the new tools work end-to-end in the live browser. After Cloudflare deploys the commit, retest one standard JPG/PNG image and one small PDF. If the PDF library still fails, inspect the browser console/network request for both CDN hosts; if an image still fails, test a standard JPG or PNG rather than HEIC/HEIF.


### JPG decoding follow-up — 4 November 2026

The user confirmed the failing upload is a JPG, so the earlier possibility of an unsupported HEIC/HEIF file did not explain this case.

- Updated the shared image loader to retry decoding through a FileReader data URL if the browser fails to decode the object URL.
- Added a more actionable error message asking the user to re-save the JPG as a fresh JPG/PNG if both decode paths fail.
- Shared JavaScript syntax check passed after the change.
- Commit: `4537c5c46d43d0bd550a495a9637beb84183c779`.

**Status:** source-level fallback added; live browser result still pending. If a standard JPG continues to fail, capture its file extension, file size and browser console error to determine whether the file itself or the browser environment is responsible.


## Unslop-inspired UI redesign — 4 November 2026

The shared Tolvix interface was redesigned using the audit and design principles from [unslop by Damir Sokolovsky](https://github.com/heydamir/unslop), licensed under CC BY 4.0. Attribution is retained here and in the shared stylesheet.

### Direction
- **Product:** Free browser-based tools for everyday text, image, PDF, calculation and developer tasks.
- **Character:** Precise, practical, calm.
- **World:** A digital workbench — quiet ink, paper-like surfaces and clear tool labels.
- **Moments:** A functional quick-access panel linking to four real Tolvix tools; the tool directory remains the main catalogue.
- **Signature:** A small cobalt index marker used to orient users through tool categories.

### Changes committed
- Replaced the purple/blue gradient and glow-heavy global styling with a light ink-and-paper neutral system and one cobalt accent.
- Reworked the homepage hero into an asymmetric layout with clear actions, tool search and real quick links to Word Counter, Image Compressor, Merge PDF and JSON Formatter.
- Simplified navigation and added direct anchors to the tool directory and guides.
- Updated shared styling for all tool pages and guides: typography, spacing, surfaces, inputs, buttons, results, focus states, responsive layouts and reduced-motion preferences.
- Flattened the existing Tolvix mark to one solid brand color while preserving its shape.
- Kept all existing tool cards, page content, analytics, metadata, URLs and core functionality unchanged.

### Source verification
- Confirmed homepage still lists all 43 tools.
- Confirmed all four quick links point to existing tool routes.
- Confirmed search input and Tools/Guides anchors remain present.
- Confirmed the shared stylesheet uses the new neutral palette, has responsive breakpoints and visible keyboard focus styles, and no longer uses hue gradients or radial color washes.
- Confirmed the logo SVG no longer contains gradient definitions.

**Status:** GitHub source updates are committed. Live Cloudflare rendering, real-device visual checks and a fresh PageSpeed run are still pending; no live-browser test is claimed here.

### Attribution
UI audit and design guidance adapted from [unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky, licensed under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/).


### Glossy black theme — 4 November 2026

- Updated the shared site palette to a deep black/charcoal background with white primary text and readable grey secondary text.
- Added subtle neutral surface sheen and restrained inset highlights to panels/cards, plus dark inputs and raised surfaces.
- Retained the cobalt-blue accent for links, focus indicators and primary actions.
- Preserved responsive breakpoints, reduced-motion support, tool markup and existing functionality.
- Source commit: `155dbf817d8c3f9cd6b09c7b07c02970e8e8e955`.
- Source checks: dark color scheme, black backgrounds, white primary text, dark cards/inputs, blue accent, responsive and focus styles present.
- **Live deployment and browser appearance still need confirmation after Cloudflare deploys.**


## Homepage visual enhancement — 4 November 2026

- Refined the Tolvix homepage into a more polished dark SaaS-style directory while retaining the glossy black background, white text and cobalt-blue accent.
- Added a compact highlights strip for the 43-tool catalogue, ₹0 access, no-account use and browser-based processing wording (with a qualification that processing varies by tool).
- Added category jump links for Text, Calculators, Developer, Images, PDF and Code/Numbers.
- Improved directory search guidance and added an accessible no-results message when a search has no matches.
- Added restrained hover lift, border highlights, subtle surface sheen, improved preview rows and responsive spacing. Reduced-motion preferences remain respected.
- Preserved all existing tool routes/cards, guides, Analytics ID, Search Console verification, SEO metadata and existing search behavior.
- Source changes committed to `main`; live Cloudflare deployment, real-browser checks and fresh PageSpeed scores remain to be confirmed after deployment.

- Wording check: the homepage highlight says “Local processing on supported tools” rather than implying every tool is fully local; the QR generator and CDN-loaded libraries retain their specific privacy disclosures.


## Ten SEO guides and tool audit — 4 November 2026

Eight new practical guides were added, bringing the editorial library to 10: image compression, image resizing, JPG vs PNG vs WebP, PDF merging, PDF splitting, PDF-to-image conversion, image-to-PDF conversion and PDF page numbering. The original JSON formatting and GST guides remain. All ten guides are linked from the homepage and listed in sitemap.xml.

### Source audit
- 43 tool HTML pages found in the repository.
- All 43 homepage tool links resolve to files present in the repository.
- All 43 tool URLs appear in sitemap.xml.
- All 10 guide pages appear in both the homepage guide section and sitemap.xml.
- Both shared JavaScript files (assets/tools.js and assets/advanced-tools.js) passed JavaScript syntax compilation.
- Shared CSS was extended to align tool panels, file pickers, disabled states, code blocks, related links and mobile panel spacing with the glossy black/white/blue theme.

### Remaining verification
This is a source-level audit, not a complete live-browser test. Real interactions, file uploads/downloads, PDF/CDN loading, console/network errors, mobile behavior and Cloudflare deployment after these commits still need live verification. Re-test the previously reported JPG decode and PDF library loading issues before marking them fixed. Search Console indexing and GA4 metrics still require the user's Google dashboards.


### Premium interface refinement — 5 November 2026

- Added a restrained ambient blue highlight over the glossy black background while preserving white primary text, readable grey secondary text and the cobalt accent.
- Refined the sticky translucent header, brand mark, navigation underline, hero hierarchy, search focus treatment, quick-link panel, category chips and tool-card depth.
- Improved keyboard focus visibility and input focus feedback; kept reduced-motion preferences respected.
- Refined responsive spacing and card layouts for smaller screens.
- No tool HTML, tool JavaScript, routes, analytics, Search Console verification, sitemap or SEO content was changed in this visual-only pass.
- CSS commit: `91af2631f99eb480847672b19926973471259dad`.

**Status:** GitHub source update is committed. Wait for Cloudflare deployment, then inspect the homepage and a few tool pages on desktop and mobile. This is not yet a live-browser visual verification.


### Signature visual detail pass — 5 November 2026

- Added a very subtle editorial grid texture behind the dark interface and a restrained cobalt hairline beneath the header.
- Refined hero typography with a soft blue-white text treatment, stronger hierarchy and responsive sizing.
- Polished quick-link arrow controls, card focus states, section heading accent and small interaction transitions.
- Kept the visual language restrained: no heavy neon glow, no added imagery, no new dependencies and no changes to tool logic or page content.
- Respects reduced-motion preferences and retains mobile breakpoints.
- CSS commit: `89b697264a7563f415d741b78ebf85c9d1853b82`.

**Status:** Source committed. Verify the Cloudflare deployment and inspect the homepage on mobile and desktop before considering this pass complete.


### Ultra-premium tool card redesign — 5 November 2026

- Refined all homepage tool cards with a consistent icon tile, stronger title hierarchy, more readable descriptions and clearer “Open tool” actions.
- Added subtle layered charcoal surfaces, a restrained cobalt top highlight, soft geometric detail and a more deliberate hover/focus treatment.
- Added category-aware typographic symbols for text, calculators, images, PDFs, QR and developer utilities without introducing icon fonts, external assets or JavaScript.
- Improved card spacing and mobile sizing; keyboard focus and reduced-motion preferences remain supported.
- Preserved all 43 tool links, tool behavior, homepage search, SEO content, analytics and existing branding.
- CSS commit: `39e45ba5fd9d80e46e6b797ebe716a8409363f74`.

**Status:** GitHub source update committed. This is a CSS-only source change; wait for Cloudflare deployment and inspect the homepage at desktop and mobile widths before treating the live appearance as verified.


### Product-grade tool workspace refinement — 5 November 2026

- Extended the premium visual system from the homepage directory into shared tool pages.
- Refined tool-page headings and category labels, with a restrained separator and clearer type hierarchy.
- Improved shared tool panels, input/select/textarea states, file-picker buttons, action controls and result surfaces.
- Styled related-tool links as compact navigational chips to make the next useful action easier to find.
- Added mobile-specific control spacing and preserved keyboard focus and reduced-motion behavior.
- No tool HTML, processing JavaScript, routes, analytics, SEO metadata or file-processing behavior was changed.
- CSS commit: `2ea11001b48aefa9b5c2fdf1745f75108887f8b1`.

**Status:** Source change committed to `main`. It requires Cloudflare deployment and visual checks across representative text, calculator, image and PDF tool pages; live appearance and tool behavior are not claimed as independently tested.


### Homepage tool categories reorganized — 5 November 2026

- Reorganized all 43 homepage tool cards into six clearer categories: Text Tools (10), Calculators (7), Developer & Data Tools (9), Image Tools (7), PDF Tools (8), and Everyday & Security Tools (2).
- Moved QR Code Generator and Password Generator into Everyday & Security; moved Word Frequency Counter and AI Detector & Humanizer into Text; grouped EMI and Tip calculators with the other calculators; moved Image to Base64 into Image Tools.
- Updated the category jump navigation and category descriptions to match the new structure.
- Preserved all 43 tool routes, card content, homepage search behavior, analytics, SEO metadata and sitemap.
- Source validation confirmed exactly 43 cards, all 43 unique routes assigned once, and all assigned routes already represented by existing homepage cards.
- Homepage commit: `b07e353608f38ba6df9661d1590465be126acddf`.
- Live Cloudflare deployment and visual/mobile checks still require confirmation after deployment.


### User-confirmed live tool testing — 5 November 2026

- The user reports that all Tolvix tools are working properly on the live website after the recent tool-page and homepage category updates.
- Record this as user-confirmed live functionality testing; it was not independently reproduced in this environment.
- The homepage currently contains 43 tool cards arranged into six categories. The source audit confirmed all 43 routes are present and assigned once.
- Next quality step: continue monitoring user feedback and fix any newly reported edge cases; then focus on Search Console indexing/search performance and GA4 traffic measurement.

## Brand update — 5 November 2026

- Replaced the previous Tolvix symbol in `assets/tolvix-mark.svg` with the new black-and-white circular bird mark supplied and approved by the project owner.
- Kept the existing asset path, so the homepage header continues to load the updated logo without changing navigation, layout, analytics, SEO metadata, or tool functionality.
- The logo is a lightweight SVG vector asset and scales cleanly across screen sizes.


## SEO expansion — 6 November 2026

- Audited and refreshed unique search-focused HTML titles, meta descriptions and Open Graph title/description text across all 43 tool pages.
- Added contextual related-guide links to all 43 tool pages while preserving their existing canonical URLs, tool interfaces, processing scripts, Google Analytics Measurement ID `G-WH86KPZW58`, and existing verification assets.
- Retained the original 10 SEO guides and created 20 additional topic-specific guides, bringing the guide library to 30 pages.
- Added the 20 new guide URLs to `sitemap.xml` and linked all 30 guides from the homepage in topic groups.
- New guide topics cover essay word counts, CSS/HTML/JavaScript minification, CSV/JSON conversion, discounts, duplicate lines, loan EMI, image cropping/resizing and PNG/JPG conversion, Base64 image data URLs, number bases, password practices, PDF text/metadata/watermarks, percentages, QR testing and find-and-replace workflows.
- The new guides include unique titles and descriptions, canonical URLs, Article structured data, GA4 tracking, practical workflows, limitations and related-tool links.
- Source-level checks are required before deployment; this change does not guarantee indexing, rankings or traffic. Search Console should be used to monitor discovery and indexing after the updated site is deployed.


### SEO source QA — 6 November 2026

- Verified the repository contains exactly 43 tool HTML pages and 30 guide HTML pages.
- Checked all 43 tool pages for a descriptive title, meta description, original canonical URL, preserved GA4 Measurement ID and a related-guide section.
- Checked contextual guide links across all 43 tool pages against the 30-page guide inventory; no missing guide targets were found.
- Checked all 20 newly created guides for title, meta description, canonical URL, GA4 tracking, Article structured data and FAQ content.
- Verified the homepage lists 30 guides and the XML sitemap contains 78 unique URLs (43 tools, 30 guides, homepage and existing trust pages).
- These are repository/source checks only. Live Cloudflare deployment, browser rendering, tool operation and Search Console indexing still need post-deployment confirmation.


### Tool card and directory quality pass — 6 November 2026

- Refined the homepage tool directory for faster scanning: clearer category headings, more consistent card spacing and stronger title/description hierarchy.
- Upgraded the 43 tool cards with more legible icon tiles, calmer layered surfaces, a consistent full-width Open tool action and a clearer hover/focus state.
- Improved mobile card density and touch-target sizing while preserving the existing one-column narrow-phone layout, keyboard focus and reduced-motion support.
- CSS-only change: no tool routes, HTML, processing logic, analytics, metadata, sitemap or guide content was changed.
- Source update committed to main; Cloudflare deployment and live desktop/mobile visual checks remain to be confirmed.




### Homepage quality and accessibility pass — 7 November 2026

- Added a keyboard-accessible “Skip to content” link on the homepage and named the primary navigation landmark.
- Made the site header sticky so visitors can reach the main navigation while browsing long tool and guide directories; adjusted anchor scroll offsets to account for the header.
- Added a concise homepage FAQ covering pricing, account requirements, browser processing and mobile compatibility. Privacy wording distinguishes browser-local processing from features that may rely on third-party services or libraries.
- Styled the FAQ with native, keyboard-operable disclosure elements and consistent dark-theme focus and spacing.
- Preserved all 43 tool cards, 30 guide links, tool routes, tool-processing scripts, GA4 Measurement ID, Search Console verification, canonical URLs and sitemap.
- Source commits: homepage `b0b818703401732a8f42d441794898fdcfd547ee`; shared CSS `0ea01b887d466ade834632377a2dd76187c3ea79`.
- **Verification status:** GitHub source updates are committed. Cloudflare deployment, live desktop/mobile rendering, keyboard testing and a fresh PageSpeed run are not independently confirmed. The FAQ uses native HTML `details/summary` controls; test open/close behavior on mobile after deployment.


### Product quality upgrade — 7 November 2026

- Improved homepage tool discovery with synonym-aware search, keyboard Enter/Arrow Down navigation to the first result, and clearer no-result guidance.
- Added device-local favorites and recently opened tools to the homepage. Visitors can save favorites and clear their recent-tool history; no account or server-side profile is created.
- Added a persistent light/dark appearance toggle on the homepage, with the existing dark theme remaining the default.
- Added a reusable Reset control to standard tools powered by `assets/tools.js`; it restores form defaults, clears file inputs, resets the result area and hides generated QR output where applicable.
- Added homepage GA4 events for tool opens and standard-tool reset actions, preserving Measurement ID `G-WH86KPZW58`.
- Refined responsive styling and light-theme surfaces while retaining the Tolvix black/white/cobalt visual identity and reduced-motion support.
- Existing 43 tool routes, 30 guides, canonical URLs, verification file and sitemap were preserved.
- **Scope and verification:** source edits only. The homepage workspace controls are currently homepage features; the generic Reset control applies to pages using `assets/tools.js`, not every advanced file-processing tool. Drag-and-drop, progress indicators, new tools, complete breadcrumb/schema rollout, privacy review of every page, and live performance/AdSense checks remain separate work. No Cloudflare deployment or live-browser testing is claimed.


### Quality expansion — November 2026

- Added eight tools: Markdown Editor, Word-to-PDF print workflow, PDF Page Extractor, Image Color Picker, Text Diff Checker, URL Encoder/Decoder, Password Strength Checker and CSV Viewer.
- Shared enhancements for standard and advanced tools include drag-and-drop file selection, keyboard-accessible upload zones, reset controls, processing feedback, and copy/download actions for text output.
- Tool pages receive generated breadcrumb navigation and WebApplication/BreadcrumbList structured data from the shared tool scripts. Existing canonical URLs and analytics configuration are retained.
- Homepage and sitemap expanded to 51 tools. No framework or build dependency added.
- Accessibility and performance changes are source-level improvements, not a certified WCAG audit or Lighthouse benchmark. Live deployment, browser-based file fixture testing, real-device testing, and AdSense approval readiness remain unverified.

- Final source-level QA after the feature additions: 51 homepage tool cards; 86 unique sitemap URLs; all eight new tool URLs present; JavaScript syntax checks passed for the shared standard, advanced and new-tool scripts. This does not replace live browser, file-fixture, accessibility-tool or Lighthouse testing.


## Security review and hardening — 7 November 2026

### Architecture review

- Reviewed `worker.js`: the Worker only forwards requests to Cloudflare Static Assets. No application API, database, authentication system, server-side file upload endpoint, or application secret was found in this Worker.
- Reviewed the shared tool scripts and representative password, QR, Markdown and PDF pages. The reviewed file-processing tools primarily process user-selected files in the browser. This reduces server-side exposure but does not make a browser or website immune to malicious files, browser extensions, compromised dependencies or client-side attacks.
- Password generation uses the browser Web Crypto API (`crypto.getRandomValues`) in the shared tool logic.
- The QR Code Generator sends the entered text/URL to the third-party `api.qrserver.com` service. Users must not submit passwords, private documents or confidential data there.
- PDF processing loads third-party libraries from CDN providers. A compromised or unavailable third-party script could affect the page that loads it.

### Response-header hardening

Updated the root `_headers` file with:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'` / `frame-src 'none'`
- `X-Permitted-Cross-Domain-Policies: none`
- `Referrer-Policy: strict-origin-when-cross-origin`
- A restrictive `Permissions-Policy` for camera, microphone, geolocation and payment APIs
- One-year HSTS on the current HTTPS hostname
- Additional CSP restrictions for base URLs, objects, forms, manifests, frames, fonts, media and workers
- `blob:` in image/media/worker sources where browser-local file previews and PDF processing may need it

### Remaining security work and limitations

- The current CSP still includes `'unsafe-inline'` in `script-src` for compatibility with inline analytics initialization and page scripts. This weakens protection against some injected-script/XSS scenarios. A follow-up should move inline executable JavaScript into reviewed external files or use per-response nonces/hashes, then remove `'unsafe-inline'` from `script-src` without breaking structured data or tool behavior.
- The website has not undergone a professional penetration test, full dependency/Supply-chain audit, complete XSS review of all 51 tool pages, or automated dynamic security scan.
- No claim is made that hackers cannot attack the site or that the current configuration is fully secure.
- This is a GitHub source update. Cloudflare deployment and live response headers have not been independently verified. After deployment, inspect the homepage and a tool page with browser developer tools or a trusted HTTP header checker and confirm the new headers are present and tools still work.


## 2026-11-07 — Mobile and site-wide usability pass

- Added global overflow safeguards and narrow-screen layout rules.
- Added an accessible collapsible mobile navigation and favicon wiring on the homepage and shared tool pages.
- Refreshed the 404 page header to use the current Tolvix mark and primary navigation label.
- Existing 2026 copyright and descriptive metadata were retained where already present. Contact page intentionally does not invent a phone number or public email address.
- Source-level changes only; confirm Cloudflare deployment and test the live site on mobile before treating these changes as verified.


## Student calculator expansion — 7 November 2026

- Added an SGPA Calculator supporting up to eight subjects, user-selected 10-point or 4-point scales, and credit-weighted grade point calculation. Users enter the grade points and credits supplied by their own institution; no universal marks-to-grade conversion is assumed.
- Added a Negative Marking Calculator with configurable total questions, correct/incorrect answers, marks per correct answer and penalty per incorrect answer. It reports net score, unattempted questions and attempted-answer accuracy.
- Added both calculator pages to the homepage directory and XML sitemap, bringing the tool catalogue from 51 to 53.
- Preserved the existing GA4 Measurement ID, Search Console verification, shared design system and existing tool routes. Source changes only; deploy through Cloudflare and test both calculators on desktop and mobile before treating them as live-verified.

### Calculator SEO and internal linking — 7 November 2026

- Refined unique page titles, meta descriptions, Open Graph titles/descriptions and WebApplication descriptions across all nine calculator pages: Age, BMI, Discount, EMI, GST, Percentage, Tip, SGPA and Negative Marking.
- Added contextual cross-links between related calculators, including student-focused links between SGPA and Negative Marking.
- Preserved canonical URLs, analytics, calculator logic and existing page content.
- Source updates committed to `main`; Cloudflare deployment and live search-result appearance still need confirmation. Metadata changes do not guarantee ranking or indexing.


## AI writing-pattern tool update — 7 November 2026

Updated `tools/ai-detector.html` to separate the writing-pattern review from the rule-based clarity editor. The analysis now reports observable features (sentence-length consistency, repeated content words, repeated sentence openings, selected formal transitions and selected filler phrases) with an explanation and limitation for each finding. Removed the aggregate heuristic score and any human/AI classification. The clarity editor lists the conservative phrase/spacing edits it applies and clearly says when it leaves the text unchanged. The page states that it does not use a machine-learning model, does not estimate AI authorship probability and cannot prove who wrote a passage. All analysis and editing remain browser-local. Existing GA4 Measurement ID and canonical URL are preserved.

**Testing status:** source updated in GitHub `main`. A deployed browser test of both workflows, copy behavior and mobile layout is still required; do not treat this commit alone as confirmation of Cloudflare deployment or live functionality.


## Site cleanup and theme consistency — 7 November 2026

- Removed the AI Detector page and its homepage card because the heuristic-based checker did not meet the product's expectations. It is no longer part of the Tolvix tool catalogue; the user plans to build it as a separate website.
- Removed the duplicate legacy URL Encoder card and page. Kept the single URL Encoder / Decoder tool at `/tools/url-encoder-decoder.html`.
- Removed both retired URLs from `sitemap.xml`. The current homepage catalogue contains 51 tools; the sitemap contains 86 URLs.
- Completed light-theme styling for tool inputs, textareas, selects, file controls, result panels, code blocks, preview cards, personal-tool controls and other previously dark-only surfaces.
- Added saved-theme restoration and a consistent Light/Dark toggle to shared tool pages. The homepage retains its existing toggle and shared localStorage preference.
- Preserved GA4 and Search Console verification assets and all remaining tool routes.

**Verification status:** GitHub source updates were committed and re-fetched for source checks. Cloudflare deployment and live browser verification are still pending; after deployment, test the homepage and several different tool pages in both themes, including file upload and output panels.

- Follow-up light-mode fix: explicitly switch the homepage's long-form content and 30-guide cards from their dark gradient surface to white, including headings, body text, links and borders.


## SEO and tool expansion — 13 November 2026

- Added six browser-local utilities to the catalogue: UTM Link Builder, Reading Time Calculator, Meta Tag Generator, JavaScript Regex Tester, Markdown Table Generator and robots.txt Generator.
- Added six original practical guides covering campaign tracking, reading-time estimates, HTML metadata, JavaScript regular expressions, Markdown tables and robots.txt setup. Each guide links to its matching tool.
- Updated the homepage directory, category navigation, search keywords, tool count (51 → 57) and guide count (30 → 36).
- Added all 12 new canonical URLs to `sitemap.xml`; existing sitemap entries were retained.
- Preserved the existing GA4 Measurement ID, Search Console verification file, hostname, brand assets and existing routes.

**Source verification:** all six new tool pages and six guide pages were created on `main`. Homepage cards and guide links were added and the sitemap was updated. These are source changes; verify Cloudflare deployment, open every new tool in a browser, test each control, and submit the updated sitemap in Search Console. New URLs are not guaranteed to be indexed or rank immediately.

- Follow-up source validation: checked inline JavaScript syntax for all six new tools. Corrected URL validation in the Meta Tag Generator after the syntax check caught an escaped-regex error; the corrected script now parses successfully. This is syntax validation only, not a full interactive browser test.

## Site quality and content audit — 9 November 2026

- Reviewed the homepage directory, About page, Contact page, Privacy Policy, responsive stylesheet, six recently added tools and their six matching SEO guides.
- Found and fixed a broken internal-link pattern in all six newer guides: the “Try the related free tool” section had assigned explanatory heading text as the link destination. Each guide now links to its correct matching tool, and the explanatory note is displayed as readable page content.
- Added a matching guide link and a distinct practical tip to each of the six newer tool pages: UTM Link Builder, Reading Time Calculator, Meta Tag Generator, Regex Tester, Markdown Table Generator and robots.txt Generator.
- Updated About page copy to reflect the seven current homepage categories.
- Reviewed Contact page: it accurately directs visitors to public GitHub Issues, warns users not to post confidential information, and does not invent an email address or response-time promise.
- Refreshed the Privacy Policy: removed the disclosure for the retired AI Detector, clarified browser-local handling for the six newer utilities, and removed a duplicated third-party-services section while retaining the QR service and CDN disclosures.
- Corrected the Image Compressor page's unrelated PDF-library privacy note and replaced generic placeholder instructions on the Image Compressor and PDF Merge pages with task-specific steps.
- Source verification after the edits: homepage contains 57 tool cards and 36 guide links; sitemap contains 98 unique URLs; all six new guide-to-tool links and all six corresponding tool-to-guide links resolve to the intended repository paths.
- Responsive CSS includes desktop/tablet/mobile breakpoints and reduced-motion rules. This is a source review, not a live visual test on physical devices.
- **Deployment and testing status:** changes are committed to GitHub `main`. Cloudflare deployment, live page status, interactive button behavior, and actual mobile/desktop rendering still need browser verification. Do not treat source checks as proof that the live site has updated.

- Follow-up editorial pass: added original worked examples to all six recently added SEO guides, covering newsletter UTM tagging, reading-time arithmetic, page-specific metadata, a JavaScript regex pattern, Markdown table alignment/escaping, and a cautious robots.txt example. The examples include practical QA checks and limitations rather than generic filler.


## Organic search content update — 9 November 2026

- Published a practical developer workflow guide covering JSON formatting, URL component encoding, Base64, JavaScript regex testing and CSV conversion.
- Added worked examples, positive/negative regex cases, links to matching tools and related guides, privacy cautions and a result-check checklist.
- Linked the guide from the homepage Developer guide group and added its canonical URL to the XML sitemap.
- Updated the homepage guide count from 36 to 37. Existing GA4 tracking ID, Search Console verification, canonical host and tool routes are preserved.
- **Verification scope:** GitHub source changes only. Submit the updated sitemap in Search Console and inspect the deployed guide before treating it as live. Search engines may take days or longer to crawl and rank a new page; this change cannot guarantee visits by tomorrow.


- Follow-up metadata consistency check: corrected the homepage meta description, Open Graph description and WebSite structured-data description from 36 to 37 guides so the search/social snippets match the current homepage guide count.


## Custom domain migration — 9 November 2026

- Connected `tolvix.in` and `www.tolvix.in` to the existing production Cloudflare Worker; the user confirmed both domains load successfully.
- Set the homepage canonical URL, Open Graph URL and WebSite JSON-LD URL to `https://tolvix.in/`.
- Updated every sitemap location and the `robots.txt` Sitemap directive to use `https://tolvix.in`.
- Preserved the existing Google Analytics Measurement ID (`G-WH86KPZW58`) and Google Search Console verification meta tag/file.
- The `workers.dev` endpoint remains enabled for now; disable it only after verifying all custom-domain routes and deployment behavior.
- Completed a source audit of all tool and guide HTML pages in the repository. Legacy `workers.dev` canonical and related metadata references were replaced with `https://tolvix.in`; the audit found no remaining legacy hostname references in those pages. Existing page paths, tool functionality, analytics and verification assets were preserved.
- **Verification scope:** Source updates are committed to `main`; the user confirmed the Cloudflare deployment is active and the new sitemap was accepted by Search Console with 99 URLs. GitHub source checks confirm the homepage, key tool pages, guides, About, Contact, Privacy and Terms use the new host. The user also confirmed representative live pages load. The `workers.dev` endpoint remains enabled until final live canonical and redirect checks are complete.


### Canonical host and WWW redirect verification — 9 November 2026

- Configured a Cloudflare Single Redirect named **WWW to Non-WWW Redirect** using the `https://www.tolvix.in/*` wildcard source and `https://tolvix.in/${1}` destination.
- Set the redirect to **301 Permanent Redirect** and enabled **Preserve query string**.
- The user tested both `https://www.tolvix.in/` and `https://www.tolvix.in/tools/word.html` and confirmed that each redirects successfully to the matching `https://tolvix.in` URL.
- The apex domain `https://tolvix.in` remains the preferred canonical hostname. The `workers.dev` endpoint remains enabled until any separate decision to disable it.
- **Verification scope:** the user confirmed these two live redirect tests. Other routes and query-string preservation have not been exhaustively tested. Google Search Console may take time to process the canonical and redirect signals.


## 9 November 2026 — domain migration and quality follow-up

- Confirmed the custom domain `https://tolvix.in` and the `www.tolvix.in` to apex 301 redirect using user-run browser checks.
- Migrated canonical URLs and site metadata to `https://tolvix.in`; source audit found no remaining old `workers.dev` host references in tool or guide HTML pages.
- Updated `robots.txt` and the 99-entry `sitemap.xml` to the custom domain. Google Search Console reported sitemap submission as **Success** with 99 discovered URLs.
- User confirmed the homepage and JSON Formatter are indexed and that Google's selected canonical matches the custom-domain URL for both pages. The new property's aggregate Page indexing report is still processing.
- Homepage directory links to all 57 tools and 37 guides; this source-level check confirms the directory inventory is represented in internal navigation. This is not a guarantee that every URL is indexed.
- Reviewed homepage, Word Counter, JSON Formatter and the JSON formatting guide for page titles, descriptions, canonical tags, useful explanatory content, FAQs and contextual links. Corrected the JSON Formatter's related-tool link from the obsolete `/tools/url-encoder.html` path to the current `/tools/url-encoder-decoder.html` route.
- Responsive styles and mobile viewport metadata are present in the source. Full cross-device browser testing, exhaustive link crawling across every page, and real-user tool interaction testing remain manual verification tasks; do not mark these complete solely from source inspection.
- Analytics Measurement ID `G-WH86KPZW58` and Search Console verification file were preserved.

- Cross-category source review: GST Calculator links to its India-focused guide and related calculators; Image Compressor links to compression/format guides and Image Resizer; UTM Link Builder links to its campaign guide and relevant developer tools; PDF Merge links to PDF-specific utilities. Removed an irrelevant Image-to-Base64 recommendation from the PDF Merge page and added PDF-to-Image instead. Expanded the PDF merge guide with contextual links to PDF Split, PDF-to-Image and page numbering.


## Organic search and technical SEO pass — 10 November 2026

- Reviewed the current homepage title, meta description, canonical URL, Open Graph metadata, WebSite structured data, category navigation, tool directory, guide directory, FAQ section, and footer navigation.
- Confirmed the homepage communicates 57 free tools and 37 practical guides, with visible category navigation for text, calculators, developer/data, image, PDF, everyday/security, and SEO/writing tools.
- Improved the homepage H1 and opening description so the main visible heading explicitly covers online tools for text, calculations, images, PDFs and code; added concrete calculator use cases (percentages, GST and loan EMIs) to clarify search intent.
- Rechecked the repository's robots.txt and sitemap source: robots.txt allows crawling and points to the custom-domain sitemap; the sitemap uses the canonical `https://tolvix.in` host. The Search Console submission was previously confirmed as Success with 99 discovered URLs.
- Rechecked representative Word Counter, JSON Formatter, QR Code Generator, GST Calculator, PDF Merge, JSON guide and PDF Merge guide metadata. Their sampled title, description and canonical tags use the custom domain and page-specific wording.
- Preserved the GA4 Measurement ID, Search Console verification assets, existing tool routes and user-facing functionality.
- **Verification boundary:** this is a source-level review and edit. A full 94-page crawl, live browser interaction test, Google indexing refresh, and physical mobile-device test have not been completed in this pass. Search rankings and next-day traffic are not guaranteed.
