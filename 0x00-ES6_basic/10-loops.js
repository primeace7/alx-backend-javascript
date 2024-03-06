module.exports = function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const idx of array.keys()) {
    result.push(appendString + array[idx]);
  }

  return result;
};
