module.exports = function hasValuesFromArray(set, array) {
  let result;
  array.forEach((elem) => {
    if (set.has(elem)) result = true;
    else result = false;
    return result;
  });
  return result;
};
