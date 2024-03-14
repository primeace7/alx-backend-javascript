module.exports = class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    } else if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    return hint === 'number' ? this._size : this._location;
  }
};
