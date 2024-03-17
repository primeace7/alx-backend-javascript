module.exports = function getListStudentIds(array) {
  const result = [];
  if (Array.isArray(array)) {
    array.map((obj) => result.push(obj.id));
  }
  return result;
};
