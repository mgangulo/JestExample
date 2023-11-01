import {describe, it, expect} from '@jest/globals';
import Divide from '../../simple_functions/Divide';

describe('Divide tests', () => {
  it('given the numbers 4 and 2, Divide() returns 2', () => {
    expect(Divide(4, 2)).toBe(2);
  });

  it('given the numbers 4 and 0, Divide() throws error of invalid dividend', () => {
    const zero: number = 0;
    const errorMsg = `Invalid dividend ${zero}`;
    //When testing errors, the function should be wrapped in a function, example: expect(() => {yourFunction()})
    expect(() => {
      Divide(4, zero);
    }).toThrow(`${errorMsg}`);
  });
});
