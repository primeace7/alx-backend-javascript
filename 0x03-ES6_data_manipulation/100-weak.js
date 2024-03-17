const weakMap = new WeakMap();
exports.weakMap = weakMap;
exports.queryAPI = function queryAPI(endpoint) {
  if (!(weakMap.has(endpoint))) {
    weakMap.set(endpoint, 1);
  } else if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    let count = weakMap.get(endpoint);
    weakMap.delete(endpoint);
    count += 1;
    weakMap.set(endpoint, count);
  }
};
