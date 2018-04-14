let room = {x:0, y:0, patches: []};

function Room(x, y) {
  room.x = x;
  room.y = y;
  room.addPatch = (px, py) => addPatch(px, py);

  return room;
}

function addPatch(x, y) {
  room.patches.push({x, y});
}

module.exports = Room;