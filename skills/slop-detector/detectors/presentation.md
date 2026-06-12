# Presentation Detector

Detects AI slop in slide decks: `.pptx`, exported slide images, or pasted slide text.

## Inputs
Export the deck as slide images or a PDF, or paste the slide text. v1 reads images/text — it does not unzip `.pptx` directly (that auto-extraction is a later add).

## How to detect
1. Load `knowledge/upstream/rulepack.json` and the lead taxonomy (`knowledge/modes.json` → `leads_with`); always also consult `knowledge/upstream/taxonomy-core.md` (Part II covers presentation tells).
2. Scan each slide for presentation tells. Known `tell_id`s:
   - `pres-three-bullets` (exactly three bullets on every slide), `pres-uniform-density` (every slide equally dense, no hero slide), `pres-takeaway-every-slide` (a summary sentence on each slide that restates), `pres-notes-are-transcript` (speaker notes just read the slide), `pres-fake-infographic` (charts with suspiciously round / unsourced numbers), `pres-no-thesis` (a deck that surveys without committing to a recommendation).
3. Apply the 6 detection tests (`rubric.md`) for each finding's `test_failed`.
4. Score per `rubric.md`.

## Locator
Use `locator.type = "slide"` with `{ "n": <slide number>, "element": "<title|bullets|chart|notes>" }`.

## Calibration
- A three-bullet slide is fine occasionally; the tell is **every** slide in threes.
- Uniform density is judged across the deck, not on one slide.

## Output
Emit one findings object per `rubric.md`'s contract. Every `tell_id` MUST exist in the rulepack. Then the human-readable summary; hand off to deslop/coach if intent asks. De-slop emits **instructions** for slide findings (it cannot edit the deck).
