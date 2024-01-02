const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const current = weakMap.get(endpoint);
    if (current >= 5) throw new Error('Endpoint load is high');
    weakMap.set(endpoint, current + 1);
  } else weakMap.set(endpoint, 1);
}

module.exports = {
  weakMap,
  queryAPI,
};
