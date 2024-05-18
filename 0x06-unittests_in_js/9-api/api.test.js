// const app = require('./api');
const request = require('request');
const chai = require('chai');

const { expect } = chai;

const result = {};
const result2 = {};

request('http://0.0.0.0:7865/cart/453', (error, response, body) => {
  if (error) ;
  result.statusCode = response.statusCode;
  result.path = response.request.path;
  result.response = body;
});

request('http://0.0.0.0:7865/cart/small', (error, response, body) => {
  if (error) ;
  result2.statusCode = response.statusCode;
  result2.path = response.request.path;
  result2.response = body;
});

describe('payment API', () => {
  it('returns the correct status code for valid id(Number)', () => {
    expect(result.statusCode).to.equal(200);
  });

  it('returns the correct status code for invalid id(string)', () => {
    expect(result2.statusCode).to.equal(404);
  });

  it('returns the right response text', () => {
    expect(result.response).to.equal('Payment methods for cart 453');
  });

  it('does not return reponse for non-numeric cartId', () => {
    expect(result2.response).to.not.equal('Payment methods for cart 453');
  });
});
