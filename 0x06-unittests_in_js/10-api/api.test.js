// const app = require('./api');
const request = require('request');
const chai = require('chai');

const { expect } = chai;

const result = {};
const result2 = {};
const result3 = {};

request('http://0.0.0.0:7865/available_payments', (error, response, body) => {
  if (error) ;
  result.statusCode = response.statusCode;
  result.response = body;
});

request({
  method: 'POST',
  uri: 'http://0.0.0.0:7865/login',
  json: true,
  body: { userName: 'Cole' },
},
(error, response, body) => {
  if (error) ;
  result2.statusCode = response.statusCode;
  result2.response = body;
});

request('http://0.0.0.0:7865/logon', (error, response, body) => {
  if (error) ;
  if (body) ;
  result3.statusCode = response.statusCode;
});

describe('payment API', () => {
  it('returns the correct status code for available_payments endpoint', () => {
    expect(result.statusCode).to.equal(200);
  });

  it('returns the correct status code for invalid endpoint', () => {
    expect(result3.statusCode).to.equal(404);
  });

  it('returns the right response object for available_payment endpoint', () => {
    const existing = JSON.stringify({ payment_methods: { credit_cards: true, paypal: false } });
    expect(existing === result.response).to.be.true;
  });

  it('returns the right response text for login endpoint', () => {
    expect(result2.response).to.equal('Welcome Cole');
  });
});
