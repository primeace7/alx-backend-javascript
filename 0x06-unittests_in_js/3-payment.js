const Utils  = require('./utils.js');
const calculateNumber = new Utils().calculateNumber;

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const result = calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${result}`);
    return result;
}


module.exports = { calculateNumber, sendPaymentRequestToApi };
