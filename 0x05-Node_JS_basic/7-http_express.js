const express = require('express');
const fs = require('node:fs');

const app = express();

// Fetch the contents of a csv file whose path is <path> and format it
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    let dataLines = data.split('\n');
    dataLines = dataLines.slice(1);

    let result = `Number of Students: ${dataLines.length}\n`;
    const groups = {};
    dataLines.forEach((elem) => {
      const splitLine = elem.split(',');
      const subject = splitLine[splitLine.length - 1];
      const firstName = splitLine[0];

      if (!Object.hasOwn(groups, subject)) groups[subject] = [firstName];
      else groups[subject].push(firstName);
    });

    for (const subject of Object.keys(groups)) result += `Number of students in ${subject}: ${groups[subject].length} List: ${groups[subject].join(', ')}\n`;
    result = result.trimRight();
    return result;
  } catch (err) {
    return Error('Cannot load the database');
  }
}

let dbPath = process.argv[2];
if (dbPath === undefined) dbPath = './database.csv';

let result = countStudents(dbPath);
result = `This is the list of our students\n${result}`;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.status(200).send(result);
});

app.listen(1245);

module.exports = app;
