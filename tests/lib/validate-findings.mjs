// Pure validator for the findings contract. `ids` is a Set of valid rulepack tell ids.
export function validateFindings(obj, schema, ids) {
  const errors = [];
  for (const f of schema.top_required) {
    if (obj[f] === undefined) errors.push(`missing top-level field: ${f}`);
  }
  if (typeof obj.score === 'number') {
    const band = schema.bands.find(b => obj.score >= b.min && obj.score <= b.max);
    if (!band) errors.push(`score ${obj.score} out of range 0-100`);
    else if (band.name !== obj.band) errors.push(`band "${obj.band}" does not match score ${obj.score} (expected "${band.name}")`);
  }
  if (obj.band !== undefined && !schema.enums.band.includes(obj.band)) {
    errors.push(`band "${obj.band}" not a valid band`);
  }
  if (Array.isArray(obj.findings)) {
    obj.findings.forEach((fd, i) => {
      const at = `finding ${i}`;
      for (const f of schema.finding_required) {
        if (fd[f] === undefined) errors.push(`${at}: missing ${f}`);
      }
      if (fd.severity !== undefined && !schema.enums.severity.includes(fd.severity)) errors.push(`${at}: bad severity "${fd.severity}"`);
      if (fd.test_failed !== undefined && !schema.enums.test_failed.includes(fd.test_failed)) errors.push(`${at}: bad test_failed "${fd.test_failed}"`);
      if (fd.tell_id !== undefined && !ids.has(fd.tell_id)) errors.push(`${at}: tell_id "${fd.tell_id}" not found in rulepack`);
      if (fd.locator === undefined || !schema.enums.locator_type.includes(fd.locator?.type)) errors.push(`${at}: bad or missing locator.type`);
    });
  } else {
    errors.push('findings must be an array');
  }
  return errors;
}
