const readDatabase = require('../utils');

let dbPath = process.argv[2];
if (dbPath === undefined) dbPath = '../database.csv';

class StudentsController {
  static getAllStudents(request, response) {
    let result = '';
    readDatabase(dbPath).then((data) => {
      result += 'This is the list of our students';
      const fields = Object.keys(data).map((elem) => elem.toUpperCase());
      fields.sort();
      fields.forEach((elem) => {
        Object.keys(data).forEach((elem2) => {
          if (elem2.toUpperCase() === elem) { result += `\nNumber of students in ${elem2}: ${data[elem2].length}. List: ${data[elem2].join(', ')}`; }
        });
      });
      response.send(result);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    let { major } = request.params;
    if (['CS', 'SWE'].includes(major)) {
      major = major.toUpperCase();
      readDatabase(dbPath).then((data) => {
        Object.keys(data).forEach((elem) => {
          if (elem.toUpperCase() === major) { response.status(200).send(`List: ${data[elem].join(', ')}`); }
        });
      }).catch(() => {
        response.status(500).send('Cannot load the database');
      });
    } else { response.status(500).send('Major parameter must be CS or SWE'); }
  }
}

module.exports = StudentsController;
