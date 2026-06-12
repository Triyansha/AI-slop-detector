---
name: slop-detector
description: Detect, de-slop, and coach away AI slop in any artifact — text, presentations, design, audio/video, and data. Use when the user wants to check whether something reads as AI-generated, get a slop score, clean up generic/hedged/hollow writing or slides, or learn how to prompt to avoid slop. Triggers include "is this AI slop", "score this", "de-slop", "clean this up", "why does this sound like AI", "make this less generic".
---

# Slop Detector

Detect AI slop, correct it, and coach the user to stop generating it. Not an "AI-or-human" accuser — a **slop scorer + coach**. Lower score = cleaner.

## Step 1 — Ingest
Determine what you were handed: pasted text, a file path, a screenshot/image, a transcript, or a URL. Normalize to readable form. For decks, expect exported slide images or pasted text; for audio/video, expect a transcript (see each detector for ingestion notes).

## Step 2 — Identify (medium + mode)
- **Medium → detector(s):** text → `detectors/text.md`; slides/.pptx/slide-images → `detectors/presentation.md`; screenshots/UI/images → `detectors/design.md`; transcript/recording → `detectors/audiovideo.md`; sheets/dashboards/metrics → `detectors/data.md`. Mixed artifacts load multiple detectors.
- **Mode:** read `knowledge/modes.json`. Match the artifact's signals to a mode; fall back to the `default: true` mode. Never hardcode modes here — adding a domain must require no edit to this file.

## Step 3 — Detect
Load the detector(s) + `rubric.md` + the lead taxonomy + `knowledge/upstream/rulepack.json`. Produce ONE findings object conforming to the contract in `rubric.md`. For multimodal input, merge + dedup + severity-weighted aggregate per `rubric.md`.

## Step 4 — Act (intent-driven)
Read the user's intent:
- "score / check / is this slop" → **detect only.** Present the score, band, and findings. Then offer de-slop and coach.
- "fix / clean up / de-slop" → detect, then run `actions/deslop.md` on the findings.
- "why / teach me / how do I avoid this" → detect, then run `actions/coach.md` on the findings.
- "do everything" → detect + deslop + coach.
- **Ambiguous → detect only,** then offer the other two.

## Output
Always lead with: `Slop Detector v<VERSION> · <mode> mode · <artifact>` then the score with its emoji band, then findings, then the chosen action's output.
