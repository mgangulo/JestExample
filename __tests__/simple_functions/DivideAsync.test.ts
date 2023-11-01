import {describe, it, expect} from '@jest/globals';
import DivideAsync from '../../simple_functions/DivideAsync';

describe('AddAsync tests', () => {
  it('given the numbers 20 and 5, DivideAsync() returns 4', async () => {
    const result = await DivideAsync(20, 5);
    expect(result.data).toBe(4);
  });

  it('given the numbers 20 and 0, DivideAsync() throws error using async/await', async () => {
    //Asserts that expect was called once
    expect.assertions(1);
    try {
      await DivideAsync(20, 0);
    } catch (e) {
      const error = e as Error;
      expect(error.message).toMatch('Invalid dividend 0');
    }
  });

  it('given the numbers 20 and 0, DivideAsync() throws error using catch', () => {
    return DivideAsync(20, 0).catch(e => {
      const error = e as Error;
      expect(error.message).toMatch('Invalid dividend 0');
    });
  });

  it('given the numbers 20 and 0, DivideAsync() throws error using rejects', async () => {
    await expect(DivideAsync(20, 0)).rejects.toStrictEqual(
      Error('Invalid dividend 0'),
    );
  });
});
