const fs = require('node:fs/promises');

const countStudents = function (path) {
  const item = fs.readFile(path, { encoding: 'utf8' });
  return item.then((data) => {
    let dataLines = data.split('\n');
    dataLines = dataLines.slice(1);

    console.log(`Number of Students: ${dataLines.length}`);
    const groups = {};
    dataLines.forEach((elem) => {
      const splitLine = elem.split(',');
      const subject = splitLine[splitLine.length - 1];
      const firstName = splitLine[0];

      if (!Object.hasOwn(groups, subject)) { groups[subject] = [firstName]; } else { groups[subject].push(firstName); }
    });

    for (const subject of Object.keys(groups)) {
      console.log(`Number of students in ${subject}: ${groups[subject].length}, List: ${groups[subject].join(', ')}`);
    }
  }).catch((err) => {
    console.log(err);
    throw Error('Cannot load the database');
  });
};

module.exports = countStudents;
