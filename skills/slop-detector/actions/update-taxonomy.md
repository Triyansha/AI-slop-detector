# Update Taxonomy (the intelligence loop)

Keeps the detector current by proposing newly-emerging slop tells. **Proposes only — never writes into the canon.** A human promotes candidates with `tools/promote.mjs`.

## When run
On a schedule (the author's weekly cron) or manually ("run the taxonomy updater"). Anyone can run it; a forker can scope it to their own domain.

## Procedure
1. **Search** for slop tells that have surfaced recently (web search / Perplexity), scoped to a medium or domain. Favor sources from the last few weeks. Good queries: "new signs of AI-generated [text/design/slides] 2026", "AI slop tells [medium] this week".
2. **Dedupe** against the existing canon. Read `knowledge/upstream/rulepack.json` ids and the taxonomies; only keep tells that are genuinely new (not a rephrasing of an existing id). When in doubt, treat it as a duplicate.
3. **Verify provenance.** For each candidate, confirm the `source` URL resolves and actually supports the tell. Drop or mark any candidate whose source you cannot confirm. Never invent a source.
4. **Write a dated candidate digest** — two files, never appending to a shared file:
   - `trends/YYYY-MM-DD.md` — human-readable: each candidate with its description, why it's new, and the source.
   - `trends/YYYY-MM-DD.candidates.json` — machine-readable array of rulepack-shaped entries (`{id, medium, domain, severity, test, rule_ref, source, date}`), ready for `tools/promote.mjs`. Use a stable slug id in the form `<medium-prefix>-<slug>` (e.g. `text-…`, `design-…`). Pick a `rule_ref` (wc-N) that matches the closest existing fix in `knowledge/writing-craft.md`.
5. **Stop.** Do not modify the rulepack or taxonomies. Report the digest path and a one-line summary.

## Promotion (separate, human-gated)
Promotion happens in the project repo (a clone with the dev harness), not in an installed copy of the skill. The author reviews `trends/YYYY-MM-DD.md`, then:
```
npm run promote -- trends/YYYY-MM-DD.candidates.json          # dry-run: validates, writes nothing
npm run promote -- trends/YYYY-MM-DD.candidates.json --apply  # appends the valid, fresh candidates
npm test                                                       # MUST pass (the regression gate)
git add knowledge/upstream/rulepack.json trends/ && git commit -m "feat: promote <date> taxonomy candidates"
```
Promotion is only complete when `npm test` is green — that is the clean-corpus regression gate (new tells must not start flagging known-good writing or break the contract).

## The cardinal rule
A candidate with no verifiable source never enters a digest. The canon's credibility is the whole product.
