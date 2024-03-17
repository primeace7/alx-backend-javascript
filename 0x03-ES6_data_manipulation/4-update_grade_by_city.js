module.exports = function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const user = student;
      user.grade = 'N/A';
      return user;
    })
    .map((student) => {
      const user = student;
      newGrades.map((grade) => {
        if (grade.studentId === user.id) {
          user.grade = grade.grade;
        }
        return undefined;
      });
      return user;
    });
};
