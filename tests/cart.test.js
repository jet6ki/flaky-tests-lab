const { addItem, getCart, removeItem } = require('../src/cart');

test('addItem adds to cart', () => {
  addItem({ id: 1, name: 'Widget' });
  expect(getCart().length).toBe(1);
});

test('cart starts empty', () => {
  expect(getCart().length).toBe(0);
});

test('removeItem removes from cart', () => {
  addItem({ id: 2, name: 'Gadget' });
  removeItem(2);
  expect(getCart().length).toBe(0);
});
