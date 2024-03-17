module.exports = function getStudentIdsSum(students) {
  return students.reduce((accumulator, current) => current.id + accumulator, 0);
};
