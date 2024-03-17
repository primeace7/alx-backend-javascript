module.exports = function createInt8TypedArray(length, position, value) {
  const u8array = new Int8Array(length);
  u8array[position] = value;
  if (u8array[position] !== value) {
    throw new Error('Position outside range');
  }
  return u8array.buffer;
};
