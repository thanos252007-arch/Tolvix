# Tolvix US Keyword Opportunity Audit
**Date:** 15 November 2026  
**Scope:** 77 tool pages in `seo/us-keyword-map.csv`

## Executive status
- All 77 tools are represented in the keyword inventory.
- Exact, current US monthly search volumes for all 77 keywords have **not** been independently verified in Google Keyword Planner. Do not treat third-party estimates or broad tool-directory figures as exact volumes.
- Search Console data available for this audit is partial: prior query snippets supplied by the site owner, not a full export with page, country, clicks, impressions, CTR and position.
- No tool-page metadata, copy, URL, canonical, sitemap, robots.txt, analytics tag or homepage layout was changed in this audit. This avoids editing pages based on incomplete evidence.

## US demand signals (directional, not guaranteed traffic)
The following third-party report pages surfaced US-specific figures. The same report distinguishes its estimated search-interest figures from its Google Ads Keyword Planner figures; the latter are rounded ranges/values and may differ.

| Keyword | US monthly figure surfaced | Source note |
|---|---:|---|
| QR code generator | 823,000 | Report's Google Ads / Keyword Planner field; report also displays a separate estimated average of 1.5M |
| free QR code generator | 135,000 | Report's Google Ads / Keyword Planner field; separate estimated average 140K |
| merge PDF | 150,000 | Third-party related-keyword estimate; not independently verified against the account's Planner |
| combine PDF | 120,000 | Third-party related-keyword estimate |
| PDF merger | 120,000 | Third-party related-keyword estimate |
| compress PDF | 140,000 | Third-party related-keyword estimate |
| split PDF | Not verified in this report | Keep as a priority candidate; obtain Planner export |
| image compressor | Not verified in this report | Keep as a priority candidate; obtain Planner export |
| JSON formatter | Not verified in this report | Keep as a priority candidate; obtain Planner export |
| word counter | Not verified in this report | Keep as a priority candidate; obtain Planner export |

**Important:** Third-party datasets may group close variants, use different date windows, and report different numbers. Use Google Ads Keyword Planner set to United States, English, Google Search, last 12 months as the consistent volume source for the final 77-keyword sheet.

## Search Console query comparison (partial historic sample)
The site owner previously supplied these query signals. The available sample did not include the associated landing page, US-only filter, or average position, so these are opportunity clues rather than confirmed page-to-query mappings.

| Search Console query | Likely relevant tool/page | Gap or content opportunity | Action |
|---|---|---|---|
| meta description html | Meta Tag Generator | Explain meta description vs title tag; add a clear worked HTML example and copy-ready snippet | Candidate for content improvement after page-level GSC confirmation |
| how to calculate emi formula | EMI Calculator | Explain EMI formula with principal, monthly interest rate and number of payments; India terminology differs from US loan-payment wording | Keep India-first; do not force US targeting |
| essay word count | Word Counter | Explain counting essay words, character count, and handling hyphenated words; add essay-focused FAQ | Candidate for content improvement after page-level GSC confirmation |
| robots.txt setup | Robots.txt Generator | Add a beginner setup example, sitemap directive, and common disallow mistakes | Candidate for content improvement after page-level GSC confirmation |
| how to convert csv to json | CSV to JSON Converter | Add a small CSV-to-JSON before/after example, header handling, and malformed-row guidance | Candidate for content improvement after page-level GSC confirmation |
| tracking link generator | UTM Link Builder | Explain source, medium, campaign and safe URL encoding; add a realistic campaign example | Candidate for content improvement after page-level GSC confirmation |

## Keyword gaps and content opportunities across all categories
Use these as page-content sections/FAQ ideas, not as permission to create duplicate URLs:

- **PDF:** merge/combine/join terminology; split by page range; extract selected pages; page numbering; watermarking; metadata; add text; PDF-to-JPG/PNG; Word-to-PDF.
- **Images:** compress JPG/PNG/WebP; resize by pixels; crop to aspect ratio; JPG vs JPEG naming; PNG transparency; image-to-PDF.
- **Developer/data:** JSON beautifier/validator; CSV headers and arrays; Base64 encode vs decode; URL percent encoding; regex examples; HTML/CSS/JavaScript minification.
- **Text/writing:** essay word count; character count; reading time; word frequency; remove duplicate lines; sort alphabetically; text diff.
- **SEO/marketing:** meta title vs meta description; robots.txt examples; URL slug best practices; UTM parameters and campaign naming.
- **Calculators/education:** use US-native terms where appropriate (tip, discount, percentage, loan payment); retain GST/SGPA/EMI as India-first where terminology and intent are region-specific.
- **Physics:** add formula, units, worked example, assumptions and limitations to each calculator; target specific equations/long-tail queries rather than generic “calculator” terms.

## Controlled improvement plan
### Batch 0 — evidence collection (no page edits)
1. Export Search Console Performance data for the last 3 months and 16 months, Search type Web, dimensions **Query + Page + Country + Device**, including clicks, impressions, CTR and average position. Run a separate US country filter and retain an unfiltered global export.
2. Export Keyword Planner results for the 77 primary keywords and useful variants, configured to United States, English, Google Search, last 12 months. Keep average monthly searches, competition, top-of-page bid and trend fields.
3. Join on normalized query and landing-page URL; mark each page's existing ranking queries, missing variants, cannibalization risk and US demand.

### Batch 1 — only evidence-backed page improvements
Prioritize pages with relevant impressions, average position roughly 5–30, and low CTR or a clear intent mismatch. Improve one small group at a time (maximum 5 pages), adding genuinely useful examples/FAQs and internal links. Do not change URLs, canonicals, analytics, sitemap or robots.txt unless a separate technical issue is proven.

### Measurement
Record a before snapshot, commit date and changed sections. Review US impressions, clicks, CTR and average position after Google has recrawled the pages; compare equivalent date windows. Do not judge success from one or two days of data.

## Data needed to finish the numeric 77-keyword comparison
This repository audit cannot access the owner's Google Ads Keyword Planner account or Search Console property. The final numeric 77-row comparison requires the two CSV exports described above. Once supplied, append exact account-exported figures and page/query matches to the inventory; do not fabricate missing volumes.
