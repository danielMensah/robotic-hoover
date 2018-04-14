const Entry = require('./index');
const fs = require('fs');

test('Test that can get the final position of hoover', () => {
  const inputData = fs.readFileSync(__dirname + '/../input.txt', 'utf8').split("\n");
  const entry = new Entry(inputData);
  expect(entry.finalPosition).toEqual('1 3')
});

test('Test that can get the number of cleaned patches', () => {
  const inputData = fs.readFileSync(__dirname + '/../input.txt', 'utf8').split("\n");
  const entry = new Entry(inputData);
  expect(entry.cleanedPatches).toEqual(1)
});

test('Test that hoover can drive', () => {
  const inputData = fs.readFileSync(__dirname + '/../inputTest.txt', 'utf8').split("\n");
  const entry = new Entry(inputData);
  expect(entry.cleanedPatches).toEqual(2);
  expect(entry.finalPosition).toEqual('0 3');
});