const utils = require('./utils');

const { uploadPhoto } = utils;
const { createUser } = utils;

module.exports = async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  return {
    photo,
    user,
  };
};
