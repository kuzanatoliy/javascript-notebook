﻿const { getCountOfOperations } = require('./B');

describe('1635B. Avoid Local Maximums', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[2, 1, 2]}                   | ${[0, [2, 1, 2]]}
    ${2} | ${[1, 2, 3, 1]}                | ${[1, [1, 2, 3, 3]]}
    ${3} | ${[1, 2, 1, 2, 1]}             | ${[1, [1, 2, 2, 2, 1]]}
    ${4} | ${[1, 2, 1, 3, 2, 3, 1, 2, 1]} | ${[2, [1, 2, 3, 3, 2, 3, 3, 2, 1]]}
    ${5} | ${[2, 1, 3, 1, 3, 1, 3, 1, 3]} | ${[2, [2, 1, 3, 3, 3, 1, 3, 3, 3]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toStrictEqual(result);
  });
});
