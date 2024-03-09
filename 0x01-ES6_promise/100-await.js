const utils = require('./utils');

const { uploadPhoto } = utils;
const { createUser } = utils;

module.exports = async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
};
