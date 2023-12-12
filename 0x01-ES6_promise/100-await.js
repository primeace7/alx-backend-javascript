const otherModule = require('./utils');

const { uploadPhoto } = otherModule;
const { createUser } = otherModule;

async function asyncUploadUser() {
  const result = {};
  try {
    const photoResponse = await uploadPhoto();
    result.photo = photoResponse;
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
  try {
    const userResponse = await createUser();
    result.user = userResponse;
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }

  return result;
}

module.exports = asyncUploadUser;
