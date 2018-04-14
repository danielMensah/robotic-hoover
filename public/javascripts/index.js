const Hoover = require('./hoover/index');
const Room = require('./room/index');
const fs = require('fs');
const file = fs.readFileSync(__dirname + '/../input.txt', 'utf8').split("\n");

initialize(file);

function initialize(inputData) {
  const room = createRoom(inputData);
  const hoover = startHoover(inputData, room);
  const drivingInstructions = inputData[inputData.length - 1];

  hoover.drive(drivingInstructions);

  this.finalPosition = hoover.getFinalPosition();
  this.cleanedPatches = hoover.cleanedPatches;

  console.log('final position: ', this.finalPosition);
  console.log('cleaned patches: ', this.cleanedPatches);
}

function createRoom(inputData) {
  const roomSize = inputData[0].split(" ").map((n) => +n);
  const dataLength = inputData.length - 1;
  const room = new Room(roomSize[0], roomSize[1]);

  for (let i = 2; i<dataLength; i++) {
    room.addPatch(+inputData[i].split(" ")[0], +inputData[i].split(" ")[1])
  }

  return room;
}

function startHoover(inputData, room) {
  const hooverInitialPosition = inputData[1].split(" ").map((n) => +n);

  return new Hoover(hooverInitialPosition[0], hooverInitialPosition[1], room);
}

module.exports = initialize;