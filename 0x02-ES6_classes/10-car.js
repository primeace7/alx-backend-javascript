class Car {
    constructor(brand, motor, color) {
	this._brand = brand;
	this._motor = motor;
	this._color = color;
    }

    [cloneType] = this.constructor;
    
    cloneCar () {
	[cloneType] = this.constructor;
	return new this[cloneType]();
    }
}

module.exports = Car;
