class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    } else if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }

    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  valueOf() {
    return `Airport [${this._code}] { _name: ${this._name}, _code: ${this._code} }`;
  }
}

module.exports = Airport;
