const sinon = require('sinon');
const chai = require('chai');
const { sendPaymentRequestToApi } = require('./5-payment');

const { expect } = chai;

let log;

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    log = sinon.spy(console, 'log');
  });

  afterEach(() => {
    log.restore();
  });

  it('should log `The total is: 120` when called with 100, 20',
    () => {
      sendPaymentRequestToApi(100, 20);
      expect(log.calledOnceWith('The total is: 120')).to.be.true;
    });

  it('should log `The total is: 20` when called with 10, 10',
    () => {
      sendPaymentRequestToApi(10, 10);
      expect(log.calledOnceWith('The total is: 20')).to.be.true;
    });
});
