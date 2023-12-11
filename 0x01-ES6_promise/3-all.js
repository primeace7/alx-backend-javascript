const otherModule = require('./utils');

const { uploadPhoto } = otherModule;
const { createUser } = otherModule;

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      console.log(result[0].body, result[1].firstName, result[1].lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

module.exports = handleProfileSignup;
