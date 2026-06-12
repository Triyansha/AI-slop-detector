# The Interrogator

The shared primitive behind de-slop and coach. It operationalizes the master test: **demand the derivation.** For any finding, generate the question the slop cannot answer.

## How to use
Given a finding (with its `test_failed`), produce the one question that exposes the missing substance. If the user can answer it, the fix writes itself. If they can't, that absence IS the verdict.

## Question generators by failed test
- **specificity** → "Could this exact sentence appear in a competitor's doc? What detail here is true only of *your* situation?"
- **provenance** → "Where did this number / quote / claim come from? Name the source, the interview, the query."
- **tradeoff** → "What are you choosing NOT to do here? What does this option cost?"
- **decision** → "After reading this, what decision is being asked for — in one sentence?"
- **stakes** → "What do you actually believe here, and what would you bet on it?"
- **confidence** → "What evidence backs this confidence level? What would change your mind?"

## Two consumers
- **De-slop** uses the *answer* to write the fix; if there's no answer, it inserts `⚠️ [GAP: …]` rather than fabricating.
- **Coach** uses the *question itself* as the teaching moment — the prevention prompt is often the question, reframed as an instruction to the AI.
