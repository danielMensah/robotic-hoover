const Hoover = require('./index');
const Room = require('../room');

test('Test that hoover can drive across the room', () => {
  const room = Room(5, 5);
  const hoover = Hoover(1, 2, room);
  hoover.drive('NNESEESWNWW');
  expect(hoover.position).toEqual({ x: 1, y: 3 });
});

test('Test that hoover cannot move beyond a wall on Y axis', () => {
  const room = Room(5, 5);
  const hoover = Hoover(3, 5, room);
  hoover.drive('N');
  expect(hoover.position).toEqual({ x: 3, y: 5 });
});

test('Test that hoover cannot move beyond a wall on X axis', () => {
  const room = Room(5, 5);
  const hoover = Hoover(3, 0, room);
  hoover.drive('S');
  expect(hoover.position).toEqual({ x: 3, y: 0 });
});

test('Test that hoover can clean patches', () => {
  const room = Room(5, 5);
  room.addPatch(3,1);
  const hoover = Hoover(3, 1, room);
  hoover.drive('S');
  expect(hoover.cleanedPatches).toEqual(1);
});