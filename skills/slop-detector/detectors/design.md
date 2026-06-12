# Design Detector

Detects AI slop in UI / web / image artifacts: screenshots, mockups, landing pages, generated images.

## Inputs
A screenshot or image (use vision), or a description of the design. v1 reads images directly.

## How to detect
1. Load `knowledge/upstream/rulepack.json` and `knowledge/upstream/taxonomy-core.md` (Part I covers design tells).
2. Scan for visual tells. Known `tell_id`s:
   - `design-gradient-purpleblue` (the single most common AI tell), `design-inter-only` (Inter as the only typeface), `design-cards-nested` (cards inside cards), `design-3d-blobs` (generic floating 3D shapes), `design-stock-diversity-scene` (the hyper-diverse team-at-a-laptop photo), `design-glassmorphism-everywhere` (frosted glass with no logic), `design-vague-cta` ("Get Started" / "Learn More" with no specificity).
3. Apply the 6 detection tests for `test_failed`.
4. Score per `rubric.md`.

## Locator
Use `locator.type = "region"` with `{ "description": "<where on the screen>" }`.

## Calibration
- A purple gradient with a real brand rationale is not slop; the tell is the default purple→blue with no brand reason.
- Judge typeface monotony across the whole UI.

## Output
Emit one findings object per the contract. De-slop emits **instructions** for region findings (it cannot edit pixels): e.g. "Replace the hero gradient with a brand color or product screenshot."
