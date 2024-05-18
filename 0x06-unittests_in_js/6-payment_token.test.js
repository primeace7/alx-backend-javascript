const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

const { expect } = chai;

describe('getPaymentTokenFromAPI', () => {
  it('returns {data: \'Success...\'} from getPaymentTokenFromAPI(true)',
    () => new Promise((done) => {
      const result = getPaymentTokenFromAPI(true);
      result.then((data) => {
        const expected = { data: 'Successful response from the API' };
        expect(JSON.stringify(data)).to.be.equal(JSON.stringify(expected));
      });
      done();
    }));
});
