const utils = require('./utils');

const { uploadPhoto } = utils;
const { createUser } = utils;

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((response) => {
    console.log(`${response[0].body} ${response[1].firstName} ${response[1].lastName}`);
  });
}

module.exports = handleProfileSignup;
