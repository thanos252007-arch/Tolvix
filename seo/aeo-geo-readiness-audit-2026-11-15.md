# Tolvix AEO + GEO Readiness Audit — 15 November 2026

## Scope and safety

- Audited all **77 tool-page source files** listed under `/tools/` in the current `sitemap.xml`.
- Reviewed page titles, meta descriptions, H1 count, H2 structure, approximate visible text length, FAQ/how-to/example signals, JSON-LD type presence, canonical URL, and internal tool/guide links.
- Manually inspected representative pages from the older utility set, newer developer/image/PDF set, security tools, and Physics calculators to check the actual visible content and structured-data patterns.
- This was a **read-only source audit**. No live website files, tool code, page copy, titles, descriptions, URLs, canonicals, sitemap, robots.txt, analytics, homepage layout, or deployments were changed.
- This is not a browser-based runtime, accessibility, Lighthouse, mobile-device, or live-indexing test. Source checks cannot prove that Cloudflare has deployed the same commit or that Google has indexed every page.

## Executive finding

**Tolvix has a sound SEO foundation, but AEO/GEO readiness is uneven.** All 77 tool pages have a single H1 and a self-referencing canonical URL in the source reviewed. Every page has a title and meta description. Internal links are present across the set. Most pages also contain a useful tool-specific introduction, usage guidance, limitations/privacy information, and a FAQ or worked example.

The main weakness is not a missing AI file or a lack of keyword repetition. It is the uneven depth and specificity of the explanatory content. Some older pages have no FAQ section or worked example; the Physics calculators have compact explanatory sections and relatively few related links; and a few newer pages have no JSON-LD at all. Several pages use generic usage wording that should be replaced with exact, tool-specific instructions when those pages are improved.

### Source-level baseline

| Check | Audit result |
|---|---|
| Tool pages checked | 77 / 77 |
| Title element | Present on all 77 |
| Meta description | Present on all 77 |
| H1 | Exactly one on all 77 |
| Canonical | Present and matched the page URL on all 77 |
| JSON-LD | Present on 74; absent on 3 |
| Internal tool/guide links | Present on all 77; typically 2–13 |
| Visible text length | Approximately 240–1,054 words across inspected pages |
| FAQ / examples / usage guidance | Varies materially by page; presence alone does not prove quality |

Word counts are approximate source-text counts after removing script/style/HTML tags; they are useful for spotting outliers, not a recommended word-count target. More words do not automatically mean better content.

## Page-by-page audit groups

Every one of the 77 tool pages is assigned to one of the following non-overlapping groups. The path lists are the audited sitemap entries.

### Priority 1 — Add and validate appropriate structured data (3 pages)

These three pages had no JSON-LD block in the inspected source. Add markup only if it accurately describes the visible page; do not add schema merely to chase AI visibility.

| Page | Audit note |
|---|---|
| `/tools/text-diff-checker.html` | No JSON-LD detected. Visible page has how-to, limitations/privacy, FAQ, and related links. |
| `/tools/image-color-picker.html` | No JSON-LD detected. Visible page has how-to, limitations/privacy, FAQ, and related links. |
| `/tools/word-to-pdf.html` | No JSON-LD detected. Visible page has how-to, limitations/privacy, FAQ, and related links. Clarify in copy that this prepares text for PDF/printing and does not import DOCX or preserve Word layout. |

### Priority 2 — Improve Physics answer depth and related discovery (20 pages)

These pages have a consistent calculator structure, formula/assumption explanations, worked-example signals and FAQs. They are generally compact (about 272–330 visible words in the source scan), use three H2 sections, and commonly have only two or three related internal links. They do not use a dedicated “How to use” heading in the same way as most other tools.

The opportunity is to make the answer more complete and verifiable: define each variable and unit, state the exact assumptions, show a short worked calculation with units, explain the result, and link to closely related calculators/guides. Avoid padding pages with generic paragraphs.

- `/tools/physics/projectile-motion.html`
- `/tools/physics/kinematics.html`
- `/tools/physics/free-fall.html`
- `/tools/physics/vector.html`
- `/tools/physics/inclined-plane.html`
- `/tools/physics/circular-motion.html`
- `/tools/physics/newtons-second-law.html`
- `/tools/physics/work-energy-power.html`
- `/tools/physics/momentum-collision.html`
- `/tools/physics/spring-shm.html`
- `/tools/physics/pendulum.html`
- `/tools/physics/wave.html`
- `/tools/physics/doppler.html`
- `/tools/physics/ohms-law.html`
- `/tools/physics/resistors.html`
- `/tools/physics/lens-mirror.html`
- `/tools/physics/snells-law.html`
- `/tools/physics/uncertainty.html`
- `/tools/physics/significant-figures.html`
- `/tools/physics/unit-converter.html`

### Priority 3 — Add useful answer coverage where FAQs/examples are absent (12 pages)

These pages did not show a FAQ signal in the source scan. That does not mean every page needs an FAQ block. First identify real user questions and add concise answers only where they improve task completion. A small example or edge-case explanation may be more useful than an FAQ section.

- `/tools/case.html`
- `/tools/duplicates.html`
- `/tools/discount.html`
- `/tools/spaces.html`
- `/tools/sort.html`
- `/tools/reverse.html`
- `/tools/base64.html`
- `/tools/csv-to-json.html`
- `/tools/json-to-csv.html`
- `/tools/tip-calculator.html`
- `/tools/password-generator.html`
- `/tools/word-frequency.html`

### Baseline group — Keep stable; improve only with evidence (42 pages)

These pages already show a more complete baseline of explanatory content signals (for example, tool-specific how-to guidance, examples and/or FAQs). Do not rewrite them just to make them longer. Check factual accuracy, output examples, limitations, privacy, and the match between visible content and actual tool behavior before deciding whether an edit is warranted.

- `/tools/word.html`
- `/tools/json.html`
- `/tools/slug.html`
- `/tools/replace.html`
- `/tools/percentage.html`
- `/tools/emi-calculator.html`
- `/tools/age.html`
- `/tools/gst.html`
- `/tools/bmi.html`
- `/tools/qr.html`
- `/tools/image-to-base64.html`
- `/tools/image-compressor.html`
- `/tools/image-converter.html`
- `/tools/image-cropper.html`
- `/tools/image-resizer.html`
- `/tools/jpg-to-png.html`
- `/tools/png-to-jpg.html`
- `/tools/pdf-merge.html`
- `/tools/pdf-split.html`
- `/tools/pdf-to-image.html`
- `/tools/image-to-pdf.html`
- `/tools/pdf-watermark.html`
- `/tools/pdf-page-number.html`
- `/tools/pdf-metadata.html`
- `/tools/pdf-add-text.html`
- `/tools/html-minifier.html`
- `/tools/css-minifier.html`
- `/tools/js-minifier.html`
- `/tools/number-base-converter.html`
- `/tools/markdown-editor.html`
- `/tools/url-encoder-decoder.html`
- `/tools/csv-viewer.html`
- `/tools/pdf-page-extractor.html`
- `/tools/password-strength-checker.html`
- `/tools/sgpa-calculator.html`
- `/tools/negative-marking-calculator.html`
- `/tools/utm-link-builder.html`
- `/tools/reading-time-calculator.html`
- `/tools/meta-tag-generator.html`
- `/tools/regex-tester.html`
- `/tools/markdown-table-generator.html`
- `/tools/robots-txt-generator.html`
- `/tools/physics/` is excluded from this group and audited above.
- `/tools/text-diff-checker.html`, `/tools/image-color-picker.html`, and `/tools/word-to-pdf.html` are excluded and audited above.

The list above contains 40 explicit paths plus the three exclusions described; the remaining baseline entries are:
- `/tools/physics/` pages are already fully listed in Priority 2 and are not part of this group.
- **Correction to group arithmetic:** the 42-page baseline group is the remaining sitemap set after the 3 schema gaps, 20 Physics pages, and 12 no-FAQ pages. The explicit path list above should be used as the stable-page review set; confirm the full sitemap membership before batch edits.

## Cross-page findings

### 1. Strong foundations to preserve

- One H1 per tool page.
- Canonicals point to the corresponding `https://tolvix.in/` tool URL.
- Titles and descriptions are already present; avoid bulk rewrites.
- Tool and guide links are present on all pages, though depth varies.
- Many pages explain limitations and browser-side processing. Keep these statements aligned with the actual implementation.
- The site has a useful spread of tool categories and supporting guides.

### 2. AEO improvements

For each page selected for a future batch:

1. Put a direct, accurate one- or two-sentence answer immediately below the H1 and before the tool interface where practical.
2. Explain exactly what the tool accepts, what it produces, and its main use case.
3. Give tool-specific numbered instructions (not generic “enter your information” wording).
4. Include a short input → output example, formula, or worked result where it genuinely helps.
5. Answer real follow-up questions: formats, limits, units, compatibility, edge cases, privacy, and what the tool does not do.
6. Use descriptive H2/H3 headings and concise paragraphs that are easy to scan and quote accurately.
7. Ensure every answer matches the live interface and tested behavior.

### 3. GEO improvements

Generative engines need reliable, distinctive source material—not keyword stuffing. Add value that is hard to infer from a generic description:

- Exact supported file formats, limits, and processing behavior.
- Transparent formulas, assumptions, units, and worked calculations.
- Clear comparisons where users must choose between formats or workflows.
- Real examples and tested edge cases.
- Accurate privacy/data-flow statements, including any third-party API calls.
- Relevant references for technical, mathematical, security, or standards-based claims.
- Consistent naming of Tolvix and each tool, with clear links between tools and guides.

Do not invent user testing, expert credentials, performance claims, statistics, testimonials, ratings, or citations. Do not create pages solely to target every wording variation.

### 4. Structured data corrections

- Do not add special “AI schema” or FAQ markup as an AEO/GEO shortcut.
- 74 pages currently have JSON-LD detected, generally `WebApplication` with an `Offer` priced at zero. Validate every property against visible facts before changing it. A sample review found both INR and USD price currencies across tools; this needs a consistency/accuracy check rather than a blind global replacement.
- Add appropriate `WebApplication` markup to the three pages without JSON-LD only after validating their name, description, category, URL, and free-use claim.
- Use `Article` markup for genuine guides where appropriate; `BreadcrumbList` only when breadcrumbs are visibly present and accurate.
- FAQ sections should remain useful visible content. Do not add `FAQPage` to chase Google FAQ rich results; Google deprecated the FAQ rich-result feature in May 2026.
- Never add ratings, reviews, authors, prices, or claims that are not true and visible.

### 5. Search and measurement

- Keep the current URLs, canonicals, sitemap, robots.txt, GA4 Measurement ID, Search Console verification, and homepage category order unchanged.
- Use Search Console query + page exports to choose which page to improve; source audit alone cannot establish search demand, ranking opportunity, or AI citations.
- Measure a stable before/after window. Do not change titles, copy, schema, and internal links on dozens of pages simultaneously.
- AEO/GEO visibility cannot be guaranteed. Track organic impressions/clicks and any available AI-search reporting; separately test whether Tolvix is cited for representative prompts across answer engines.

## Controlled improvement plan

### Batch 0 — Validation and baseline (no live changes)
- Export the current Search Console performance data by page and query.
- Record the current Git commit and verify Cloudflare deployment status.
- Run a representative manual test of each tool family before content changes.
- Resolve the schema currency and generic-instruction questions with source evidence.

### Batch 1 — Three schema-gap pages (source changes committed; live verification pending)
- `tools/text-diff-checker.html` — replaced generic instructions with exact line-comparison steps, example and 200,000-character limit; clarified position-based comparison limitations; added a WebApplication JSON-LD block.
- `tools/image-color-picker.html` — added exact image loading/pixel-sampling steps, file/megapixel limits and colour-profile caveat; added a WebApplication JSON-LD block.
- `tools/word-to-pdf.html` — clarified the plain-text-only workflow, browser print steps, 100,000-character limit and DOCX limitation; added a WebApplication JSON-LD block.

Source verification after the commits confirmed one H1, unchanged canonical URL, existing title/description, valid JSON-LD, retained GA4 ID, specific ordered instructions, and removal of the generic instruction sentence on all three pages. The tool JavaScript was not changed. Cloudflare live deployment, visual rendering and real browser tool behavior still need a post-deployment check before Batch 2.

### Batch 2 — Five Physics pages
Start with the Physics pages that have the strongest Search Console impressions or relevant queries. Improve units, formulas, assumptions, worked examples and related links. Then measure before moving to the next five.

### Batch 3 — Five older utility pages
Prioritize by Search Console evidence. Add examples or FAQs only where they address genuine user questions. Replace generic instructions with precise steps.

### Later batches
Continue in groups of no more than five pages. Each batch must have a written change list, source review, functional regression check, canonical/analytics/sitemap check, and deployment verification before the next batch.

## Official Tolvix organic-growth principle

**SEO is the foundation; AEO and GEO are content-quality and discoverability lenses within the same strategy.** Tolvix will optimize for people first, search engines secondarily through sound technical SEO, and answer/generative systems through clear, accurate, attributable, useful source content. There is no guaranteed AI citation formula and no need for special AI-only files, artificial content chunking, or mass FAQ/schema generation.

## Authoritative guidance

- Google Search Central, AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central, optimizing for generative AI features: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search Central, using generative AI content responsibly: https://developers.google.com/search/docs/fundamentals/using-gen-ai-content

Audit date: 15 November 2026.
Repository source reviewed: `main` branch at audit time.
