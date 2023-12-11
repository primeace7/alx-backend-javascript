function uploadPhoto(fileName) {
  return Promise.reject(Error(`${fileName} cannot be processed`));
}

module.exports = uploadPhoto;
