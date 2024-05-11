const fs = require('node:fs/promises');

function readDatabase(path) {
  const item = fs.readFile(path, { encoding: 'utf8' });
  return item.then((data) => {
    let dataLines = data.split('\n');
    dataLines = dataLines.slice(1);

    const groups = {};
    dataLines.forEach((elem) => {
      const splitLine = elem.split(',');
      const subject = splitLine[splitLine.length - 1];
      const firstName = splitLine[0];

      if (!Object.hasOwn(groups, subject)) groups[subject] = [firstName];
      else groups[subject].push(firstName);
    });
    return groups;
  }).catch((err) => err);
}

module.exports = readDatabase;
