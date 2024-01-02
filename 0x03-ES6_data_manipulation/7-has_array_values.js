function hasValuesFromArray(set, array) {
  for (const elem of array) {
    if (!set.has(elem)) return false;
  }
  return true;
}

module.exports = hasValuesFromArray;
