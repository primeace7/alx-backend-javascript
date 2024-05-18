const assert =require('assert');
const calculateNumber  =require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when the sum of 1.1 and 3 is calculated', () => {
    assert.equal(calculateNumber(1.1, 3), 4);
  });

  it('should return 6 when the sum of 0.9 and 5 is calculated', () => {
    assert.equal(calculateNumber(0.9, 5), 6);
  });

  it('should return 2 when the sum of 0.5 and 1 is calculated', () => {
    assert.equal(calculateNumber(0.5, 1), 2);
  });

  it('should return 0 when the sum of 0.1 and 0.2 is calculated', () => {
    assert.equal(calculateNumber(0.1, 0.2), 0);
  });
});
