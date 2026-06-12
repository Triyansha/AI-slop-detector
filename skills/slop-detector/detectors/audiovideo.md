# Audio / Video Detector

Detects AI slop in spoken/recorded content via its transcript (and the recording if available): talking-head videos, podcast scripts, voiceovers, webinars.

## Inputs
A transcript (provide or paste it). v1 works from the transcript; it does not transcribe audio itself (that auto-extraction is a later add). If the recording is available, also judge delivery.

## How to detect
1. Load `knowledge/upstream/rulepack.json` and `taxonomy-core.md`. A transcript read as prose ALSO gets the text tells (`text-*`) — run those too; this detector adds the delivery-specific tells.
2. Scan for audio/video tells. Known `tell_id`s:
   - `av-engagement-bait` (hooks like "you won't believe…", "make sure to like and subscribe" bolted onto thin content), `av-scripted-cadence` (metronomic, evenly-paced scripted delivery with no natural variation), `av-no-named-detail` (the whole piece names no specific person, number, date, or event).
3. Apply the 6 detection tests.
4. Score per `rubric.md`.

## Locator
Use `locator.type = "span"` for transcript text, or `locator.type = "timestamp"` with `{ "start": "MM:SS", "end": "MM:SS" }` for delivery/pacing tells.

## Calibration
- A genuine hook is fine; the tell is engagement-bait wrapping content with no specific substance.
- Judge cadence across the piece, not one sentence.

## Output
Emit one findings object per the contract. De-slop edits transcript spans and emits **notes** for timestamp findings.
