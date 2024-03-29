const signUpUser = require('./4-user-promise');
const uploadPhoto = require('./5-photo-reject');

module.exports = function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
};
