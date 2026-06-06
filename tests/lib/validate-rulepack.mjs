// Pure, dependency-free validator for the rulepack index.
export function validateRulepack(pack, schema) {
  const errors = [];
  if (!Array.isArray(pack)) return ['rulepack must be an array'];
  const seen = new Set();
  for (let i = 0; i < pack.length; i++) {
    const e = pack[i];
    const at = `entry ${i} (${e?.id ?? 'no-id'})`;
    for (const field of schema.required) {
      if (e[field] === undefined || e[field] === '') errors.push(`${at}: missing ${field}`);
    }
    for (const [field, allowed] of Object.entries(schema.enums)) {
      if (e[field] !== undefined && !allowed.includes(e[field])) {
        errors.push(`${at}: ${field} "${e[field]}" not in ${allowed.join('|')}`);
      }
    }
    for (const [field, pat] of Object.entries(schema.patterns)) {
      if (e[field] !== undefined && !new RegExp(pat).test(String(e[field]))) {
        errors.push(`${at}: ${field} "${e[field]}" fails pattern ${pat}`);
      }
    }
    if (e.id !== undefined) {
      if (seen.has(e.id)) errors.push(`${at}: duplicate id "${e.id}"`);
      seen.add(e.id);
    }
  }
  return errors;
}
