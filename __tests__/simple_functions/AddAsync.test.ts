import {describe, it, expect} from '@jest/globals';
import AddAsync from '../../simple_functions/AddAsync';

describe('AddAsync tests', () => {
  it('given the numbers 7 and 3, AddAsync() returns 10 using a promise', async () => {
    return AddAsync(7, 3).then(result => {
      expect(result.data).toBe(10);
    });
  });

  it('given the numbers 7 and 3, AddAsync() returns 10 using async/await', async () => {
    const result = await AddAsync(7, 3);
    expect(result.data).toBe(10);
  });

  it('given the numbers 7 and 3, AddAsync() returns 10 using resolves', () => {
    return expect(AddAsync(7, 3)).resolves.toStrictEqual({data: 10});
  });
});
