const { calculateDiscount } = require('../src/pricing');

test('calculateDiscount returns a number', () => {
  expect(typeof calculateDiscount()).toBe('number');
});

test('discount is above minimum threshold', () => {
  const discount = calculateDiscount();
  expect(discount).toBeGreaterThan(0.05);
});
