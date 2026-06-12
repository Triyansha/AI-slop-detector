# Text Detector

Detects AI slop in prose: docs, PRDs, emails, Slack, markdown, copy, and transcripts-read-as-text.

## Inputs
Pasted text, a `.md`/`.txt` file, or a transcript. Read it whole.

## How to detect
1. Load `knowledge/upstream/rulepack.json` and the lead taxonomy for the active mode (`knowledge/modes.json` → `leads_with`). In **pm** mode read `taxonomy-pm.md`; in **general** mode read `taxonomy-core.md`. Always also consult `taxonomy-core.md` for cross-medium tells.
2. Scan for the text tells. For each instance, record the exact offending span and the matching `tell_id` from the rulepack. Known text tell_ids include:
   - `text-emdash-overload`, `text-tricolon-reflex`, `text-hedging-everywhere`, `text-opener-fastpaced`, `text-restating-conclusion`, `text-passive-voice`, `text-nominalization`, `text-buzzword-abstraction` (general)
   - `text-nongoals-empty`, `text-fabricated-quote`, `text-untestable-requirement`, `text-buried-ask`, `text-fabricated-precision`, `text-both-sides-nochoice` (pm)
3. Apply the **6 detection tests** (`rubric.md`) to decide `test_failed` for each finding.
4. Score per `rubric.md` (severity-weighted density, lower = cleaner).

## Calibration — do NOT over-flag (false positives are worse than misses)
- A single em-dash is not slop; **density** of em-dashes across the artifact is. Flag `text-emdash-overload` only when usage is conspicuously frequent (rule of thumb: ≳1 per 100 words AND used as a default connector).
- One list of three is fine; the **reflexive tricolon** (everything in threes) is the tell.
- Hedging is appropriate for genuine uncertainty; flag only when it's pervasive AND the artifact should take a position (strategy, recommendation, PRD).
- Read `knowledge/feedback.md` first and respect prior corrections.

## Output
Emit exactly one findings object per `rubric.md`'s contract. Every `tell_id` MUST exist in the rulepack. Use `locator.type = "span"` with the exact offending `text`. Set `version` from the `VERSION` file. Then print the human-readable header and a short summary; if intent includes fix/coach, hand the findings object to the relevant action.
