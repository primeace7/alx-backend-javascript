module.exports = function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    array.splice(array.indexOf(item), 1, appendString + item);
  }

  return array;
};
