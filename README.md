# Slop Detector

A multimodal AI-slop **detector, de-slopper, and coach** — a pure-instruction Claude skill. Paste text (decks, design, audio, and data in later versions), get a **Slop Score (0–100, lower = cleaner)**, the specific tells, a de-slopped fix, and coaching to stop generating slop.

Not an "AI-or-human" accuser. A scorer + coach: *what* reads as machine-made, *how* to fix it, and *how* to prevent it.

## Install

```bash
npx skills add Triyansha/AI-slop-detector
```

This installs the skill by git-clone into your Claude skills directory, so a later `git pull` brings weekly taxonomy updates.

<details>
<summary>Manual install (alternative)</summary>

Clone the repo into your Claude skills directory:

```bash
git clone https://github.com/Triyansha/AI-slop-detector.git ~/.claude/skills/slop-detector
```

Then restart your Claude session so the skill is discovered.
</details>

## Use
In Claude, with the skill installed:
- "Is this AI slop?" / "Score this PRD" → detect
- "Clean this up" / "de-slop this email" → de-slop
- "Why does this sound like AI?" → coach

## How it works
Router (`SKILL.md`) → five detectors → shared rubric + knowledge → de-slop / coach actions. The taxonomy is data (`knowledge/`), so it's forkable and gets smarter over time. See `spec/` and `plans/` in the parent project for the full design.

The taxonomy gets smarter over time: `actions/update-taxonomy.md` proposes newly-emerging tells as dated candidate digests in `trends/`, and `npm run promote` appends reviewed ones (gated by the test suite).

## Develop / test
```bash
npm test          # zero-dependency contract + rulepack + regression-gate validators
npm run eval      # optional: scores the corpus via the Anthropic API (needs ANTHROPIC_API_KEY)
npm run promote -- trends/<date>.candidates.json   # dry-run promote of reviewed tells (add --apply to write)
```

## Status
v0.3.0 — Five detectors + the propose-not-commit intelligence loop. Coming: the npx installer.

## License
MIT
