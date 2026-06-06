// Optional eval: runs the skill against each corpus fixture via the Anthropic API
// and checks the score band against expected.json. Requires ANTHROPIC_API_KEY.
// Usage: ANTHROPIC_API_KEY=sk-... node tests/eval/run-eval.mjs
import { readFileSync } from 'node:fs';

const key = process.env.ANTHROPIC_API_KEY;
if (!key) { console.error('Set ANTHROPIC_API_KEY to run the eval.'); process.exit(2); }

const root = new URL('../../', import.meta.url);
const expected = JSON.parse(readFileSync(new URL('tests/expected.json', root)));
const rubric = readFileSync(new URL('rubric.md', root), 'utf8');
const textDetector = readFileSync(new URL('detectors/text.md', root), 'utf8');
const rulepack = readFileSync(new URL('knowledge/upstream/rulepack.json', root), 'utf8');

const bandOf = (s) => s <= 20 ? 'clean' : s <= 45 ? 'light' : s <= 70 ? 'heavy' : 'saturated';
let pass = 0, fail = 0;

for (const [fixture, exp] of Object.entries(expected)) {
  const artifact = readFileSync(new URL('tests/corpus/' + fixture, root), 'utf8');
  const prompt = `You are the Slop Detector text detector. Rubric:\n${rubric}\n\nDetector:\n${textDetector}\n\nRulepack:\n${rulepack}\n\nScore this artifact. Return ONLY the findings JSON object.\n\nARTIFACT:\n${artifact}`;
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ model: 'claude-opus-4-8', max_tokens: 2000, messages: [{ role: 'user', content: prompt }] })
  });
  const data = await res.json();
  const text = data?.content?.[0]?.text ?? '';
  const json = JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1));
  const gotBand = bandOf(json.score);
  const bandOk = gotBand === exp.band;
  const caught = new Set(json.findings.map(f => f.tell_id));
  const missing = exp.must_catch.filter(id => !caught.has(id));
  const ok = bandOk && missing.length === 0;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${fixture} — band ${gotBand} (want ${exp.band})${missing.length ? ', missed: ' + missing.join(',') : ''}`);
  ok ? pass++ : fail++;
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
