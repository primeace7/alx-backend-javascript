module.exports = function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
};
