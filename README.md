# Tolvix — Free Online Tools

Tolvix is a free online tools website built to make everyday text, calculation, developer and productivity tasks simple and accessible.

- **Live website:** https://tolvix.thanos252007.workers.dev/
- **GitHub repository:** https://github.com/thanos252007-arch/Tolvix
- **Hosting:** Cloudflare Workers
- **Budget approach:** ₹0 / free-tier services
- **Primary goal:** Build useful tools, grow genuine organic traffic, and prepare the site for responsible monetization.

> **Project log last updated:** 5 November 2026 (Day 2 code audit)  
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

## 6. Next actions

- [x] Confirm latest GitHub changes deployed on Cloudflare Workers (user confirmed on 5 November 2026).
- [x] Review/update About, Contact and Privacy Policy source files; create Terms of Use page and add links in homepage/footer/navigation.\n- [ ] Verify all four pages on the live Cloudflare website after deployment.
- [ ] Audit the website and count useful original content pages towards the 10–15 target.
- [x] Add calculator validation for empty/invalid values (Discount, GST, Percentage and Tip); source re-fetched and changes confirmed.
- [ ] Verify the four updated calculators on the live Cloudflare site in a normal browser; automated URL access was unavailable during this check.
- [ ] Test every tool with valid and invalid inputs in a real browser, including Base64 and secure password generation.
- [ ] Verify QR generation and PNG download against the external QR service in a real browser.
- [ ] Test AI Detector analysis, clarity editing and Clear button in a real browser.
- [ ] Test the site on a mobile device and fix layout or usability issues.
- [ ] Complete a full navigation, footer-link and internal-link audit across all tool pages.
- [ ] Review Google Analytics traffic sources and current user counts.
- [ ] Review Google Search Console indexing, impressions and clicks.
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
