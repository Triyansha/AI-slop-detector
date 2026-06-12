# Data Detector

Detects AI slop in quantitative artifacts: sheets, dashboards, metric docs, RICE/prioritization tables, market-sizing models.

## Inputs
Pasted table/CSV, a metric doc, a screenshot of a dashboard, or a sizing model.

## How to detect
1. Load `knowledge/upstream/rulepack.json` and the PM taxonomy (`taxonomy-pm.md` §8 covers data/metrics tells).
2. Scan for data tells. Known `tell_id`s:
   - `data-fabricated-precision` (numbers specified beyond their derivation), `data-round-numbers` (suspiciously round $10B/$50B figures), `data-uniform-confidence` (every RICE confidence = 80%), `data-no-formula` (a metric named but never operationalized — no formula/source/owner), `data-vanity-metric` (a vanity metric dressed as the north star), `data-chart-no-sowhat` (a chart with no interpretation/action).
3. Apply the 6 detection tests — provenance is the workhorse here.
4. Score per `rubric.md`.

## Locator
Use `locator.type = "cell"` with `{ "ref": "<cell/range or the metric name>" }`.

## Calibration
- A round number that's genuinely sourced is fine; the tell is the round number with no derivation.
- Demand the formula: a metric with no formula/source/owner is the strongest data tell.

## Output
Emit one findings object per the contract. De-slop may edit a cell or emit an instruction; for missing derivations it flags `⚠️ [GAP: …]` rather than inventing a number.
