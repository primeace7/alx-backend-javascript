module.exports = function createIteratorObject(report) {
  const result = [];
  for (const item of Object.values(report.allEmployees)) {
    result.push(...item);
  }
  return result;
};
