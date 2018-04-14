const directionsConstants = require( '../directionsConstants');
const { some } = require('lodash');

let hoover = {
  position: { x: 0, y: 0 }
};
let room;

function Hoover(x, y, roomInstance) {
  hoover.position = {x, y};
  hoover.cleanedPatches = 0;
  room = roomInstance;

  hoover.drive = (navigationInstructions) => drive(navigationInstructions);
  hoover.getFinalPosition = () => getFinalPosition();

  return hoover;
}

function drive(navigationInstructions) {
  let directions = navigationInstructions.split('');

  for (let direction of directions) {
    cleanPatch();
    switch (direction) {
      case directionsConstants.WEST:
        moveWest();
        break;
      case directionsConstants.EAST:
        moveEast();
        break;
      case directionsConstants.SOUTH:
        moveSouth();
        break;
      default:
        moveNorth();
    }
  }
}

function moveNorth() {
  if (hoover.position.y === room.y) return; // if it hits the wall

  hoover.position.y++;
  hoover.canMove = true;
}

function moveSouth() {
  if (hoover.position.y === 0) return;

  hoover.position.y--;
  hoover.canMove = true;
}

function moveEast() {
  if (hoover.position.x === room.x) return;

  hoover.position.x++;
  hoover.canMove = true;
}

function moveWest() {
  if (hoover.position.x === 0) return;

  hoover.position.x--;
  hoover.canMove = true;
}

function cleanPatch() {
  if (some(room.patches, hoover.position)) {
    const index = room.patches.indexOf(hoover.position);
    room.patches.splice(index, 1);
    hoover.cleanedPatches++;
  }
}

function getFinalPosition() {
  return `${hoover.position.x} ${hoover.position.y}`;
}

module.exports = Hoover;