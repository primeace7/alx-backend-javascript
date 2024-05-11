const fs = require('node:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    let dataLines = data.split('\n');
    dataLines = dataLines.slice(1);

    process.stdout.write(`Number of Students: ${dataLines.length}`);
    const groups = {};
    dataLines.forEach((elem) => {
      const splitLine = elem.split(',');
      const subject = splitLine[splitLine.length - 1];
      const firstName = splitLine[0];

      if (!Object.hasOwn(groups, subject)) groups[subject] = [firstName];
      else groups[subject].push(firstName);
    });

    for (const subject of Object.keys(groups)) {
      process.stdout.write(`Number of students in ${subject}: ${groups[subject].length}`,
        `List: ${groups[subject].join(', ')}`);
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
