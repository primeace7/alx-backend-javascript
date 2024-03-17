module.exports = function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  } else {
    for (const [key, val] of map.entries()) {
      if (val === 1) {
        map.delete(key);
        map.set(key, 100);
      }
    }
  }
  return map;
};
