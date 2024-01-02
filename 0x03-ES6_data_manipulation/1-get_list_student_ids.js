function getListStudentIds(array) {
  const result = [];
  if (array instanceof Array) {
    array.map((item) => result.push(item.id));
  }

  return result;
}

module.exports = getListStudentIds;
