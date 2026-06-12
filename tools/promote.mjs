// Promote reviewed taxonomy candidates into the rulepack.
// Usage:
//   node tools/promote.mjs trends/2026-06-11.candidates.json          # dry-run (default): validates + reports, writes nothing
//   node tools/promote.mjs trends/2026-06-11.candidates.json --apply  # appends fresh, valid candidates to the rulepack
import { readFileSync, writeFileSync } from 'node:fs';
import { validateCandidate, dedupeCandidates } from './lib/promote-core.mjs';

const file = process.argv[2];
const apply = process.argv.includes('--apply');
if (!file) { console.error('Usage: node tools/promote.mjs <candidates.json> [--apply]'); process.exit(2); }

const root = new URL('../', import.meta.url);
const schema = JSON.parse(readFileSync(new URL('skills/slop-detector/knowledge/rulepack.schema.json', root)));
const rulepackUrl = new URL('skills/slop-detector/knowledge/upstream/rulepack.json', root);
const rulepack = JSON.parse(readFileSync(rulepackUrl));
const candidates = JSON.parse(readFileSync(file));

const fresh = dedupeCandidates(candidates, rulepack);
const skipped = candidates.length - fresh.length;

const valid = [], invalid = [];
for (const c of fresh) {
  const errs = validateCandidate(c, schema); // network check left to the human reviewer; sources already verified at digest time
  (errs.length ? invalid : valid).push({ c, errs });
}

console.log(`Candidates: ${candidates.length} | already-known/dupes skipped: ${skipped} | fresh: ${fresh.length}`);
console.log(`Valid: ${valid.length} | invalid: ${invalid.length}`);
for (const { c, errs } of invalid) console.log(`  INVALID ${c?.id ?? '(no id)'}: ${errs.join('; ')}`);

if (!apply) { console.log('\nDry run — nothing written. Re-run with --apply to append the valid candidates.'); process.exit(invalid.length ? 1 : 0); }
if (invalid.length) { console.error('\nRefusing to apply: fix the invalid candidates first.'); process.exit(1); }

const merged = [...rulepack, ...valid.map(v => v.c)];
writeFileSync(rulepackUrl, JSON.stringify(merged, null, 2) + '\n');
console.log(`\nApplied ${valid.length} new tells. Rulepack now has ${merged.length} entries. Run "npm test" to verify, then commit.`);
