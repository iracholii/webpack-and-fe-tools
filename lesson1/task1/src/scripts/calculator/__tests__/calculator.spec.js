import { sum, mult } from '../calculator';

it('should return sum of two numbers', () => {
  expect(sum(2, 4)).toEqual(6);
});

it('should return two numbers multiplied', () => {
  expect(mult(2, 6)).toEqual(12);
});
