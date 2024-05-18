const chai = require('chai');
const calculateNumber = require('./1-calcul');
const expect = chai.expect;


describe('calculateNumber', function() {
    describe('SUBTRACT', function() {
	it('7.7 - -4.5 should return 12', function() {
            expect(calculateNumber('SUBTRACT', 7.7, -4.5)).to.equal(12);
        });

	it('-5 - 2.3 should return -7', function() {
            expect(calculateNumber('SUBTRACT', -5, 2.3)).to.equal(-7);
        });

	it('-6 - 3.5 should return -10', function() {
            expect(calculateNumber('SUBTRACT', -6, 3.5)).to.equal(-10);
        });
	
	it('4.1 - 2.2 should return 2', function() {
	    expect(calculateNumber('SUBTRACT', 4.1, 2.2)).to.equal(2);
	});

	it('5.3 - 2.94 should return 2', function() {
	    expect(calculateNumber('SUBTRACT', 5.3, 2.94)).to.equal(2);
	});

	it('6.81 - 1.499 should return 6', function() {
	    expect(calculateNumber('SUBTRACT', 6.81, 1.499)).to.equal(6);
	});

	it('7.5 - 0.499 should return 8', function() {
	    expect(calculateNumber('SUBTRACT', 7.5, 0.499)).to.equal(8);
	});

	it('7.61 - 4.5 should return 3', function() {
	    expect(calculateNumber('SUBTRACT', 7.61, 4.5)).to.equal(3);
	});

	it('7 - 4 should return 3', function() {
            expect(calculateNumber('SUBTRACT', 7, 4)).to.equal(3);
        });

	it('8 - 7.7 should return 0', function() {
            expect(calculateNumber('SUBTRACT', 8, 7.7)).to.equal(0);
        });

	it('20 - 18.42 should return 2', function() {
            expect(calculateNumber('SUBTRACT', 20, 18.42)).to.equal(2);
        });

	it('14 - 4.86 should return 9', function() {
            expect(calculateNumber('SUBTRACT', 14, 4.86)).to.equal(9);
        });
    })

    describe('DIVIDE', function() {
	it('5 / 0 should return `Error`', function() {
	    expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
	});

	it('4.1 / 0.499 should return `Error`', function() {
	    expect(calculateNumber('DIVIDE', 4.1, 0.499)).to.equal('Error');
	});

	it('6.6 / 1.2 should return 7', function() {
	    expect(calculateNumber('DIVIDE', 6.6, 1.2)).to.equal(7);
	});

	it('9.8 / 4.51 should return 2', function() {
	    expect(calculateNumber('DIVIDE', 9.8, 4.51)).to.equal(2);
	});

	it('10 / 1.499 should return 10', function() {
	    expect(calculateNumber('DIVIDE', 10, 1.499)).to.equal(10);
	});

	it('9 / 2.7 should return 3', function() {
	    expect(calculateNumber('DIVIDE', 9, 2.7)).to.equal(3);
	});

	it('6 / 2 should return 3', function() {
	    expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
	});

	it('15.5 / 4 should return 4', function() {
	    expect(calculateNumber('DIVIDE', 15.5, 4)).to.equal(4);
	});

	it('18.35 / 9 should return 2', function() {
	    expect(calculateNumber('DIVIDE', 18, 9)).to.equal(2);
	});

	it('-11.7 / 3.22 should return -4', function() {
            expect(calculateNumber('DIVIDE', -11.7, 3.22)).to.equal(-4);
	});

	it('-18.31 / -9.4 should return 2', function() {
            expect(calculateNumber('DIVIDE', -18.31, -9.4)).to.equal(2);
        });
    });
	
    describe('SUM', function() {
	it('1.1 + 3 should return 4', function() {
	    expect(calculateNumber('SUM', 1.1, 3)).to.equal(4);
	});
	    
	it('0.9 + 5 should return 6', function() {
	    expect(calculateNumber('SUM', 0.9, 5)).to.equal(6);
	});
		 
	it('0.5 + 1 should return 2', function() {
            expect(calculateNumber('SUM', 0.5, 1)).to.equal(2);
	});
	
	it('0.1 + 0.2 should return 0', function() {
            expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
	});
    });
});
	    
