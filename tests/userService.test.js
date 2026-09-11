const { saveUser, getUsers } = require('../src/userService');

test('saves a user to the service', () => {
  saveUser({ name: 'Alice' });
  expect(getUsers().length).toBe(1);
});

test('getUsers returns an array', () => {
  expect(getUsers()).toBeInstanceOf(Array);
});
