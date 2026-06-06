import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateFindings } from './lib/validate-findings.mjs';

const schema = JSON.parse(readFileSync(new URL('./contract.schema.json', import.meta.url)));
const rulepack = JSON.parse(readFileSync(new URL('../knowledge/upstream/rulepack.json', import.meta.url)));
const ids = new Set(rulepack.map(e => e.id));

const good = {
  score: 64, band: 'heavy', mode: 'pm', artifact: 'PRD', version: '0.1.0',
  findings: [{ tell_id: 'text-nongoals-empty', severity: 'high',
    locator: { type: 'span', text: 'out of scope items' }, test_failed: 'tradeoff', why: 'no items named' }],
  top_fix: 'List 3 concrete out-of-scope items.'
};

test('findings: a well-formed object passes', () => {
  assert.deepEqual(validateFindings(good, schema, ids), []);
});

test('findings: band must match score', () => {
  const bad = { ...good, band: 'clean' };
  assert.ok(validateFindings(bad, schema, ids).some(m => m.includes('band')));
});

test('findings: unknown tell_id is rejected', () => {
  const bad = { ...good, findings: [{ ...good.findings[0], tell_id: 'text-does-not-exist' }] };
  assert.ok(validateFindings(bad, schema, ids).some(m => m.includes('tell_id')));
});

test('findings: bad locator.type is rejected', () => {
  const bad = { ...good, findings: [{ ...good.findings[0], locator: { type: 'paragraph' } }] };
  assert.ok(validateFindings(bad, schema, ids).some(m => m.includes('locator')));
});

test('findings: missing top-level field is rejected', () => {
  const { top_fix, ...bad } = good;
  assert.ok(validateFindings(bad, schema, ids).some(m => m.includes('top_fix')));
});

test('findings: null object is reported, not thrown', () => {
  assert.ok(validateFindings(null, schema, ids).some(m => m.includes('not an object')));
});

test('findings: null entry in findings array is reported, not thrown', () => {
  const bad = { ...good, findings: [null] };
  assert.ok(validateFindings(bad, schema, ids).some(m => m.includes('finding 0')));
});
