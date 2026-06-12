# Slop Detector

A multimodal AI-slop **detector, de-slopper, and coach** — a pure-instruction Claude skill. Paste text (decks, design, audio, and data in later versions), get a **Slop Score (0–100, lower = cleaner)**, the specific tells, a de-slopped fix, and coaching to stop generating slop.

Not an "AI-or-human" accuser. A scorer + coach: *what* reads as machine-made, *how* to fix it, and *how* to prevent it.

## Install

```bash
npx skills add Triyansha/AI-slop-detector
```

This uses the [Vercel `skills` CLI](https://github.com/vercel-labs/skills) to copy the skill folder (`skills/slop-detector/`) into your Claude skills directory. Add `-g` to install globally:

```bash
npx skills add Triyansha/AI-slop-detector -g
```

<details>
<summary>Manual install (alternative)</summary>

Clone the repo and copy the skill folder into your Claude skills directory:

```bash
git clone https://github.com/Triyansha/AI-slop-detector.git
cp -r AI-slop-detector/skills/slop-detector ~/.claude/skills/slop-detector
```

Then restart your Claude session so the skill is discovered.
</details>

## Use
In Claude, with the skill installed:
- "Is this AI slop?" / "Score this PRD" → detect
- "Clean this up" / "de-slop this email" → de-slop
- "Why does this sound like AI?" → coach

## How it works
Router (`SKILL.md`) → five detectors → shared rubric + knowledge → de-slop / coach actions. The taxonomy is data (`knowledge/`), so it's forkable and gets smarter over time.

The taxonomy gets smarter over time: `actions/update-taxonomy.md` proposes newly-emerging tells as dated candidate digests in `trends/`, and `npm run promote` appends reviewed ones (gated by the test suite).

## Repo layout
- `skills/slop-detector/` — the installable skill (what `npx skills add` copies): `SKILL.md`, `detectors/`, `actions/`, `knowledge/`, `rubric.md`, `interrogator.md`, `trends/`.
- `tests/`, `tools/`, `package.json` — maintainer dev harness (the zero-dependency validators + the `promote` helper). Not needed to *use* the skill; used to develop and grow it.

## Develop / test
```bash
npm test          # zero-dependency contract + rulepack + regression-gate validators
npm run eval      # optional: scores the corpus via the Anthropic API (needs ANTHROPIC_API_KEY)
npm run promote -- trends/<date>.candidates.json   # dry-run promote of reviewed tells (add --apply to write)
```

## Status
v1.0.0 — Five detectors + intelligence loop, installable via `npx skills`. The full foundation is live.

## License
MIT
