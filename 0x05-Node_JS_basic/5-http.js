const { createServer } = require('node:http');
const fs = require('node:fs');

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

    for (const subject of Object.keys(groups)) { result += `Number of students in ${subject}: ${groups[subject].length} List: ${groups[subject].join(', ')}\n`; }
    result = result.trimRight();
    return result;
  } catch (err) {
    return Error('Cannot load the database');
  }
}

let dbPath = process.argv[2];
if (dbPath === undefined) dbPath = './database.csv';

const result = countStudents(dbPath);

// Now create a simple web server to serve the formated csv content from an endpoint
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') { res.end('Hello Holberton School!'); } else if (req.url === '/students') { res.end(`This is the list of our students\n${result}`); }
});

app.listen(1245, '0.0.0.0');

module.exports = app;
