const { uploadPhoto, createUser } = require('./utils');

async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}

module.exports = asyncUploadUser;
