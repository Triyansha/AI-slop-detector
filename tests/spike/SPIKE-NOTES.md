# Contract Spike — Go/No-Go

## De-slop branch test (keys off locator.type)
- text-finding: locator.type = "span" → deslop EDITS the span in place. Rewrite:
  "Out of scope for v1: (1) SSO, (2) bulk CSV import, (3) mobile app — each deferred to keep the launch to the core reporting flow." OK editable from the finding alone.
- design-finding: locator.type = "region" → deslop EMITS AN INSTRUCTION (cannot edit pixels):
  "Replace the hero background gradient with [brand color] or a product screenshot." OK instruction-only path works.
- CONCLUSION: a single `locator.type` switch cleanly selects edit-vs-instruct. OK

## Coach mapping test (keys off tell_id -> rulepack -> root cause)
- text-nongoals-empty -> root cause "models fill template sections without judgment" -> prevention prompt
  "List 3 things explicitly out of scope and one sentence on why each was cut." OK
- design-gradient-purpleblue -> root cause "model defaults to the statistical-mean aesthetic" -> prevention prompt
  "Specify the brand palette and ban default gradients." OK
- CONCLUSION: tell_id is a sufficient key to reach a root cause + prevention prompt. OK

## VERDICT: GO. The contract supports 5 media x 3 actions without per-pair formats.
## Locator types confirmed needed: span, slide, region, cell, timestamp.
