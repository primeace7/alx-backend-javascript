function getStudentsByLocation(students, city) {
  return students.filter((elem) => elem.location === city);
}

module.exports = getStudentsByLocation;
