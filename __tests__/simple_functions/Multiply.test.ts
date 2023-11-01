//Imports from jest
import {describe, it, expect} from '@jest/globals';
import Multiply from '../../simple_functions/Multiply';

describe('Multiply tests', () => {
  it('given the numbers 4 and 3, Multiply() returns 12', () => {
    expect(Multiply(4, 3)).toBe(12);
  });

  it('given the numbers 4 and -3, Multiply() returns -12', () => {
    expect(Multiply(4, -3)).toBe(-12);
  });

  it('given the numbers 4 and 3, Multiply() is not 0', () => {
    expect(Multiply(4, 3)).not.toBe(0);
  });
});
