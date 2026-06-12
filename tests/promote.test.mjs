import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dedupeCandidates, validateCandidate } from '../tools/lib/promote-core.mjs';

const schema = JSON.parse(readFileSync(new URL('../knowledge/rulepack.schema.json', import.meta.url)));

const existing = [{ id: 'text-emdash-overload' }, { id: 'design-inter-only' }];

test('dedupe: drops candidates whose id already exists', () => {
  const cands = [{ id: 'text-emdash-overload' }, { id: 'text-brand-new-tell' }];
  const fresh = dedupeCandidates(cands, existing);
  assert.deepEqual(fresh.map(c => c.id), ['text-brand-new-tell']);
});

test('dedupe: drops duplicates within the candidate batch', () => {
  const cands = [{ id: 'x-new' }, { id: 'x-new' }];
  const fresh = dedupeCandidates(cands, existing);
  assert.equal(fresh.length, 1);
});

test('validateCandidate: a well-formed candidate passes', () => {
  const c = { id: 'text-new-tell', medium: 'text', domain: 'general', severity: 'medium', test: 'specificity', rule_ref: 'wc-1', source: 'https://example.com/x', date: '2026-06-11' };
  assert.deepEqual(validateCandidate(c, schema), []);
});

test('validateCandidate: missing source is rejected', () => {
  const c = { id: 'text-new-tell', medium: 'text', domain: 'general', severity: 'medium', test: 'specificity', rule_ref: 'wc-1', date: '2026-06-11' };
  assert.ok(validateCandidate(c, schema).some(m => m.includes('source')));
});

test('validateCandidate: non-resolving source url is flagged when checkUrl says so', () => {
  const c = { id: 'text-new-tell', medium: 'text', domain: 'general', severity: 'medium', test: 'specificity', rule_ref: 'wc-1', source: 'https://dead.example/x', date: '2026-06-11' };
  const errs = validateCandidate(c, schema, () => false);
  assert.ok(errs.some(m => m.includes('source url')));
});
