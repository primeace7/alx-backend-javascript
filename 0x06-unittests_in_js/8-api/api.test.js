// const app = require('./api');
const request = require('request');
const chai = require('chai');

const { expect } = chai;

const result = {};

request('http://0.0.0.0:7865/', (error, response, body) => {
  if (error) ;
  if (body) ;
  result.statusCode = response.statusCode;
  result.path = response.request.path;
  result.response = response.body;
});

describe('payment API', () => {
  it('returns the correct status code - 200', () => {
    expect(result.statusCode).to.equal(200);
  });

  it('returns result for the correct path - /', () => {
    expect(result.path).to.equal('/');
  });

  it('returns the right response text', () => {
    expect(result.response).to.equal('Welcome to the payment system');
  });
});
