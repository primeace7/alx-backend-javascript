const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
    describe('SUBTRACT', function() {
	it('7.7 - -4.5 should return 12', function() {
            assert.equal(calculateNumber('SUBTRACT', 7.7, -4.5), 12);
        });

	it('-5 - 2.3 should return -7', function() {
            assert.equal(calculateNumber('SUBTRACT', -5, 2.3), -7);
        });

	it('-6 - 3.5 should return -10', function() {
            assert.equal(calculateNumber('SUBTRACT', -6, 3.5), -10);
        });
	
	it('4.1 - 2.2 should return 2', function() {
	    assert.equal(calculateNumber('SUBTRACT', 4.1, 2.2), 2);
	});

	it('5.3 - 2.94 should return 2', function() {
	    assert.equal(calculateNumber('SUBTRACT', 5.3, 2.94), 2);
	});

	it('6.81 - 1.499 should return 6', function() {
	    assert.equal(calculateNumber('SUBTRACT', 6.81, 1.499), 6);
	});

	it('7.5 - 0.499 should return 8', function() {
	    assert.equal(calculateNumber('SUBTRACT', 7.5, 0.499), 8);
	});

	it('7.61 - 4.5 should return 3', function() {
	    assert.equal(calculateNumber('SUBTRACT', 7.61, 4.5), 3);
	});

	it('7 - 4 should return 3', function() {
            assert.equal(calculateNumber('SUBTRACT', 7, 4), 3);
        });

	it('8 - 7.7 should return 0', function() {
            assert.equal(calculateNumber('SUBTRACT', 8, 7.7), 0);
        });

	it('20 - 18.42 should return 2', function() {
            assert.equal(calculateNumber('SUBTRACT', 20, 18.42), 2);
        });

	it('14 - 4.86 should return 9', function() {
            assert.equal(calculateNumber('SUBTRACT', 14, 4.86), 9);
        });
    })

    describe('DIVIDE', function() {
	it('5 / 0 should return `Error`', function() {
	    assert.equal(calculateNumber('DIVIDE', 5, 0), 'Error');
	});

	it('4.1 / 0.499 should return `Error`', function() {
	    assert.equal(calculateNumber('DIVIDE', 4.1, 0.499), 'Error');
	});

	it('6.6 / 1.2 should return 7', function() {
	    assert.equal(calculateNumber('DIVIDE', 6.6, 1.2), 7);
	});

	it('9.8 / 4.51 should return 2', function() {
	    assert.equal(calculateNumber('DIVIDE', 9.8, 4.51), 2);
	});

	it('10 / 1.499 should return 10', function() {
	    assert.equal(calculateNumber('DIVIDE', 10, 1.499), 10);
	});

	it('9 / 2.7 should return 3', function() {
	    assert.equal(calculateNumber('DIVIDE', 9, 2.7), 3);
	});

	it('6 / 2 should return 3', function() {
	    assert.equal(calculateNumber('DIVIDE', 6, 2), 3);
	});

	it('15.5 / 4 should return 4', function() {
	    assert.equal(calculateNumber('DIVIDE', 15.5, 4), 4);
	});

	it('18.35 / 9 should return 2', function() {
	    assert.equal(calculateNumber('DIVIDE', 18, 9), 2);
	});

	it('-12.4 / 3.22 should return -4', function() {
            assert.equal(calculateNumber('DIVIDE', -12.4, 3.22), -4);
        });

	it('-18.31 / -9.4 should return 2', function() {
            assert.equal(calculateNumber('DIVIDE', -18.31, -9.4), 2);
        });
    });
});	    
