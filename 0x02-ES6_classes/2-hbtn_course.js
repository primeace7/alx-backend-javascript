class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    else if (typeof length !== 'number') throw new TypeError('Length must be a number');

    if (students instanceof Array) this._students = students;
    else throw new TypeError('Students must be an array');

    this._name = name;
    this._length = length;
  }

  set name(val) {
    if (typeof val !== 'string') throw new TypeError('name must be a string');
    this._name = val;
  }

  get name() {
    return this._name;
  }

  set length(len) {
    if (typeof len !== 'number') throw new TypeError('length must be a number');
    this._name = len;
  }

  get length() {
    return this._length;
  }

  set students(val) {
    if (val instanceof Array) this._students = val;
    else throw new TypeError('students must be an array');
  }

  get students() {
    return this._students;
  }
}

module.exports = HolbertonCourse;
