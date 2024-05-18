const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment').sendPaymentRequestToApi;
const Utils = require('./utils.js');

const calculateNumber = new Utils().calculateNumber
const sendPaymentRequestToApiSpy = sinon.spy(sendPaymentRequestToApi);

sendPaymentRequestToApiSpy(100, 20);

describe('sendPaymentRequestToApi', function() {
    it('Itself should be called once', function() {
	expect(sendPaymentRequestToApiSpy.calledOnce).to.be.true;
    });

    it('Return same result as calculateNumber(`SUM`, 100, 20)', function () {
	console.log(sendPaymentRequestToApi(100, 20));
	expect(calculateNumber('SUM', 100, 20)).to.be
	    .equal(sendPaymentRequestToApiSpy(100, 20));
    });
});
