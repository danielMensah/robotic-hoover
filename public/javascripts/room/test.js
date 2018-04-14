const Room = require('./index');

test('Test that can patches to room', () => {
  const room = Room(5,5);
  room.addPatch(1,0);
  room.addPatch(2,1);

  const expected = [{x:1,y:0}, {x:2,y:1}];

  expect(room.patches).toEqual(expected);
});