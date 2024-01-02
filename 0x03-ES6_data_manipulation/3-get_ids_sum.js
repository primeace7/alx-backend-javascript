function getStudentIdsSum(students) {
  return students.reduce((total, elem) => total + elem.id, 0);
}

module.exports = getStudentIdsSum;
