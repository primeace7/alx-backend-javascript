function updateStudentGradeByCity(students, city, newGrades) {
  // filter out students not belonging to given city
  const cityStudents = students.filter((student) => student.location === city);

  // create an array of student ids to be given new grades
  const idList = [];
  newGrades.forEach((grade) => idList.push(grade.studentId));

  // loop through filtered students and assign grades
  const result = cityStudents.map((student) => {
    const sample = student;
    if (idList.includes(student.id)) {
      for (const item of newGrades) {
        if (item.studentId === student.id) sample.grade = item.grade;
      }
    } else sample.grade = 'N/A';
    return sample;
  });
  return result;
}

module.exports = updateStudentGradeByCity;
