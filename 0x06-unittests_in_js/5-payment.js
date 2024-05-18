const Utils = require('./utils');

const { calculateNumber } = new Utils();

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
  return result;
}

module.exports = { calculateNumber, sendPaymentRequestToApi };
