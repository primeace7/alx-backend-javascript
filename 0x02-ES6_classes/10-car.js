const clone = Symbol('car clone');
class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [clone]() {
    return new this.constructor();
  }

  cloneCar() {
    return this[clone]();
  }
}

module.exports = Car;
