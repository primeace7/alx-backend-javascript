function updateUniqueItems(map) {
    if (map instanceof Map) {

	for (const [key, val] of map.entries()) {
	    if (val === 1) map.set(key, 100);
	}
	return map;
    }
    else throw new Error('Cannot process');
}

module.exports = updateUniqueItems;
