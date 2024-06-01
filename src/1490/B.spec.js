﻿const { getCountOfMoves } = require('./B');

describe('1490B. Balanced Remainders', () => {
  it.each`
    n    | array                                                                                                        | result
    ${1} | ${[0, 2, 5, 5, 4, 8]}                                                                                        | ${3}
    ${2} | ${[2, 0, 2, 1, 0, 0]}                                                                                        | ${1}
    ${3} | ${[7, 1, 3, 4, 2, 10, 3, 9, 6]}                                                                              | ${3}
    ${4} | ${[0, 1, 2, 3, 4, 5]}                                                                                        | ${0}
    ${5} | ${[26, 77, 74, 39, 20, 60, 14, 41, 42, 95, 69, 71, 71, 39, 98, 3, 3, 77, 44, 50, 69, 17, 4, 44, 25, 71, 30]} | ${14}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfMoves(array)).toBe(result);
  });
});
