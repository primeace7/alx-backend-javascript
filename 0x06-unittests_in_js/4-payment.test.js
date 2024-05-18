const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;
const { sendPaymentRequestToApi } = require('./4-payment');
const Utils = require('./utils');

const utils = new Utils();

const calculateNumberStub = sinon.stub(utils, 'calculateNumber').returns(10);
const { calculateNumber } = utils;
const consoleSpy = sinon.spy(console, 'log');

sendPaymentRequestToApi(100, 20);
calculateNumber('SUM', 100, 20);

describe('utils.calculateNumber', () => {
  it('should be called with (`SUM`, 100, 20)', () => {
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('console.log should be called with `The total is: 10`', () => {
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  calculateNumberStub.restore();
  consoleSpy.restore();
});
