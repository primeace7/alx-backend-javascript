const Car = require('./10-car');

module.exports = class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new super.constructor();
  }
};
