module.exports = function cleanSet(set, startString) {
  const result = [];
  set.forEach(
    (elem) => {
      if (startString === '') return undefined;

      return elem.startsWith(startString) ? result.push(
        elem.slice(startString.length),
      ) : undefined;
    },
  );
  return result.join('-');
};
