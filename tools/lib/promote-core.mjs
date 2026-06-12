// Pure, dependency-free helpers for promoting taxonomy candidates.

// Reuses the rulepack field rules. `schema` is knowledge/rulepack.schema.json.
// `checkUrl` is an optional (url) => boolean; when provided and it returns false,
// the source is flagged. Default skips the network check (returns true).
export function validateCandidate(c, schema, checkUrl = () => true) {
  const errors = [];
  if (c == null || typeof c !== 'object') return ['candidate is not an object'];
  for (const field of schema.required) {
    if (c[field] == null || c[field] === '') errors.push(`missing ${field}`);
  }
  for (const [field, allowed] of Object.entries(schema.enums)) {
    if (c[field] != null && !allowed.includes(c[field])) errors.push(`${field} "${c[field]}" not in ${allowed.join('|')}`);
  }
  for (const [field, pat] of Object.entries(schema.patterns)) {
    if (c[field] != null && c[field] !== '' && !new RegExp(pat).test(String(c[field]))) errors.push(`${field} "${c[field]}" fails pattern`);
  }
  if (c.source != null && !checkUrl(c.source)) errors.push(`source url did not resolve: ${c.source}`);
  return errors;
}

// Drops candidates whose id already exists in `existing`, and intra-batch dupes.
export function dedupeCandidates(candidates, existing) {
  const seen = new Set(existing.map(e => e.id));
  const out = [];
  for (const c of candidates) {
    if (c == null || seen.has(c.id)) continue;
    seen.add(c.id);
    out.push(c);
  }
  return out;
}
