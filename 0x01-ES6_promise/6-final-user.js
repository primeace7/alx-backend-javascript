const signUpUser = require('./4-user-promise');
const uploadPhoto = require('./5-photo-reject');

function handleProfileSignup(firstName, lastName, fileName) {
  const result = Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .finally((value) => value);
  return result;
}

module.exports = handleProfileSignup;
