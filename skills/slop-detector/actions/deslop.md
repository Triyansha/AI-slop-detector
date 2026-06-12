# De-slop

Correct each finding using the canon in `knowledge/writing-craft.md`. Consumes a findings object (the contract in `rubric.md`); never re-reads the raw artifact for detection.

## Procedure
For each finding:
1. Look up its `tell_id` in `knowledge/upstream/rulepack.json` → read the `rule_ref` (e.g. `wc-5`).
2. Apply that transformation rule from `knowledge/writing-craft.md` (the 15-rule table) to the span/region.
3. Branch on `locator.type`:
   - `span` / `cell` → rewrite the text in place.
   - `slide` / `region` / `timestamp` → emit a concrete **instruction** (you cannot edit pixels/audio): e.g. "Merge slides 4–5 — equal density signals AI" or "Replace the hero gradient with a brand color."

## The cardinal rule — never fabricate to fill a gap
When a fix needs a specific you cannot know (a real metric, a named source, an actual quote), do NOT invent one. Insert a visible flag and say exactly what to supply:
`⚠️ [GAP: insert the real Q3 conversion number]`
A rewrite that invents "$2.3M" has not removed slop — it has upgraded it into something more dangerous. Use the Interrogator (`interrogator.md`) to generate the question whose answer the user must provide.

## Output
1. The corrected artifact (or the instruction list, for slide/region/timestamp findings).
2. A short changelog: what was fixed vs. what was flagged as a GAP.
3. Check the result against the **9-question master standard** in `knowledge/writing-craft.md`. If any answer is "no", revise before returning.
