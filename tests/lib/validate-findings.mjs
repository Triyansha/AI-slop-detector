// Pure validator for the findings contract. `ids` is a Set of valid rulepack tell ids.
// Never throws — always returns an array of error strings (empty = valid).
export function validateFindings(obj, schema, ids) {
  const errors = [];
  if (obj == null || typeof obj !== 'object') return ['findings object is not an object'];
  for (const f of schema.top_required) {
    if (obj[f] === undefined) errors.push(`missing top-level field: ${f}`);
  }
  if (obj.score !== undefined && typeof obj.score !== 'number') {
    errors.push(`score must be a number, got ${typeof obj.score}`);
  }
  if (typeof obj.score === 'number') {
    const band = schema.bands.find(b => obj.score >= b.min && obj.score <= b.max);
    if (!band) errors.push(`score ${obj.score} out of range 0-100`);
    else if (band.name !== obj.band) errors.push(`band "${obj.band}" does not match score ${obj.score} (expected "${band.name}")`);
  }
  if (obj.band !== undefined && !schema.enums.band.includes(obj.band)) {
    errors.push(`band "${obj.band}" not in ${schema.enums.band.join('|')}`);
  }
  if (Array.isArray(obj.findings)) {
    obj.findings.forEach((fd, i) => {
      const at = `finding ${i}`;
      if (fd == null || typeof fd !== 'object') {
        errors.push(`${at}: entry is not an object`);
        return;
      }
      for (const f of schema.finding_required) {
        if (fd[f] === undefined) errors.push(`${at}: missing ${f}`);
      }
      if (fd.severity !== undefined && !schema.enums.severity.includes(fd.severity)) errors.push(`${at}: severity "${fd.severity}" not in ${schema.enums.severity.join('|')}`);
      if (fd.test_failed !== undefined && !schema.enums.test_failed.includes(fd.test_failed)) errors.push(`${at}: test_failed "${fd.test_failed}" not in ${schema.enums.test_failed.join('|')}`);
      if (fd.tell_id !== undefined && !ids.has(fd.tell_id)) errors.push(`${at}: tell_id "${fd.tell_id}" not found in rulepack`);
      if (fd.locator !== undefined && !schema.enums.locator_type.includes(fd.locator?.type)) errors.push(`${at}: bad locator.type "${fd.locator?.type}"`);
    });
  } else if (obj.findings !== undefined) {
    errors.push('findings must be an array');
  }
  return errors;
}
