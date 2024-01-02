function cleanSet(set, startString) {
  const size = startString.length;
  const result = [];

  if (startString === '') return '';

  set.forEach((value) => {
    if (value.startsWith(startString)) result.push(value.slice(size));
  });
  return result.join('-');
}

module.exports = cleanSet;
