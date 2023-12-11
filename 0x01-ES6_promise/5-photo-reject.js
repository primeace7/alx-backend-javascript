export default function uploadPhoto(filename) {
    return Promise.reject(`${filename} cannot be processed`);
}

module.exports = uploadPhoto;
