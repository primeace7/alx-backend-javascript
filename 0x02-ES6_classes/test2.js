class testing {
  constructor() {
    if (this.constructor != testing && !'abs' in this) {
	    throw new Error('abs not defined in derived class');
    }
  }

  abs() {}
}

class testing2 extends testing {}

console.log(new testing());
console.log(new testing2().constructor);
