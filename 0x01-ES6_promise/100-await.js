const otherModule = require('./utils');

const { uploadPhoto } = otherModule;
const { createUser } = otherModule;

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
