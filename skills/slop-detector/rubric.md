# The Slop Rubric

One score, applied identically to every medium. Lower = cleaner.

## The Slop Score (0–100)

| Band | Range | Emoji | Meaning |
|---|---|---|---|
| Clean | 0–20 | 🟢 | Reads as deliberate human work |
| Light | 21–45 | 🟡 | A few tells; quick fixes |
| Heavy | 46–70 | 🟠 | Pervasive tells; needs real revision |
| Saturated | 71–100 | 🔴 | Structure-without-substance throughout |

Compute the score as the **severity-weighted density of findings**, normalized to artifact length, capped at 100. Weights: low = 1, medium = 3, high = 6. More findings and higher severity push the score up. A short artifact with one high-severity tell scores higher than a long one with the same single tell (density).

For **multimodal artifacts** (multiple detectors ran): concatenate findings, dedup (same `tell_id` AND overlapping `locator`), then take the **severity-weighted aggregate — never the average** of sub-scores (averaging lets a clean section hide a slop-saturated one).

## The 6 Detection Tests

Every finding fails at least one:

1. **Specificity** — could this exact sentence appear in another company's doc unchanged?
2. **Provenance** — for any number/quote/claim: where did it come from?
3. **Tradeoff** — does it make a real choice and name what it gives up?
4. **Decision** — is it clear what decision is asked for or made?
5. **Stakes** — does the author reveal what they'd bet on?
6. **Confidence** — does stated confidence match actual evidence?

## The Findings Contract (emit EXACTLY this shape)

Every detection returns one JSON object:

```json
{
  "score": 64,
  "band": "heavy",
  "mode": "pm",
  "artifact": "PRD",
  "version": "0.1.0",
  "findings": [
    {
      "tell_id": "text-nongoals-empty",
      "severity": "high",
      "locator": { "type": "span", "text": "out of scope items" },
      "test_failed": "tradeoff",
      "why": "non-goals section names no actual excluded item"
    }
  ],
  "top_fix": "the single highest-leverage change, one sentence"
}
```

### Field rules
- `band` MUST match `score`: 🟢 0–20 clean · 🟡 21–45 light · 🟠 46–70 heavy · 🔴 71–100 saturated.
- `version` MUST equal the contents of the `VERSION` file.
- Every `tell_id` MUST exist in `knowledge/upstream/rulepack.json` (or `knowledge/local/`). Never invent a tell_id.
- `test_failed` ∈ {specificity, provenance, tradeoff, decision, stakes, confidence}.
- `severity` ∈ {low, medium, high}.

### The typed `locator` (per medium)
| `type` | Shape | Medium | De-slop behavior |
|---|---|---|---|
| `span` | `{ "type":"span", "text":"..." }` | text, transcript | edit the span in place |
| `slide` | `{ "type":"slide", "n":4, "element":"title" }` | presentation | emit an instruction |
| `region` | `{ "type":"region", "description":"hero background" }` | design | emit an instruction |
| `cell` | `{ "type":"cell", "ref":"C12" }` | data | edit or instruct |
| `timestamp` | `{ "type":"timestamp", "start":"01:12", "end":"01:20" }` | audio/video | emit a note |

## Output header
Always print: `Slop Detector v<VERSION> · <mode> mode · <artifact>` above the human-readable summary.
