import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateRulepack } from './lib/validate-rulepack.mjs';

const schema = JSON.parse(readFileSync(new URL('../knowledge/rulepack.schema.json', import.meta.url)));

test('rulepack: valid entry passes', () => {
  const pack = [{
    id: 'text-nongoals-empty', medium: 'text', domain: 'pm', severity: 'high',
    test: 'specificity', rule_ref: 'wc-1', source: 'https://example.com', date: '2026-06-05'
  }];
  const errors = validateRulepack(pack, schema);
  assert.deepEqual(errors, []);
});

test('rulepack: duplicate id is rejected', () => {
  const e = { id: 'dup-x', medium: 'text', domain: 'pm', severity: 'low', test: 'specificity', rule_ref: 'wc-1', source: 'https://x.co', date: '2026-06-05' };
  const errors = validateRulepack([e, { ...e }], schema);
  assert.ok(errors.some(m => m.includes('duplicate id')));
});

test('rulepack: bad medium enum is rejected', () => {
  const errors = validateRulepack([{
    id: 'x-y', medium: 'audio', domain: 'pm', severity: 'low', test: 'specificity', rule_ref: 'wc-1', source: 'https://x.co', date: '2026-06-05'
  }], schema);
  assert.ok(errors.some(m => m.includes('medium')));
});

test('rulepack: missing field is rejected', () => {
  const errors = validateRulepack([{ id: 'x-y', medium: 'text' }], schema);
  assert.ok(errors.some(m => m.includes('missing')));
});

test('rulepack: null entry is reported, not thrown', () => {
  const errors = validateRulepack([null], schema);
  assert.ok(errors.some(m => m.includes('not an object')));
});

test('rulepack: null field value is treated as missing', () => {
  const errors = validateRulepack([{
    id: 'x-y', medium: null, domain: 'pm', severity: 'low',
    test: 'specificity', rule_ref: 'wc-1', source: 'https://x.co', date: '2026-06-05'
  }], schema);
  assert.ok(errors.some(m => m === 'entry 0 (x-y): missing medium'));
});

test('rulepack: the shipped upstream rulepack is valid', () => {
  const pack = JSON.parse(readFileSync(new URL('../knowledge/upstream/rulepack.json', import.meta.url)));
  const errors = validateRulepack(pack, schema);
  assert.deepEqual(errors, [], errors.join('\n'));
});
