const ClassRoom = require('./0-classroom');

module.exports = function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
};
