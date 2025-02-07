﻿const { getRank } = require('./A');

describe('1017A. The Rank', () => {
  it.each`
    n    | results                                                                                                          | result
    ${1} | ${[[100, 80, 90, 99], [60, 60, 60, 60], [90, 60, 100, 60], [60, 100, 60, 80], [100, 100, 0, 100], [0, 0, 0, 0]]} | ${1}
    ${2} | ${[[100, 98, 100, 100], [100, 100, 100, 100], [100, 100, 99, 99], [90, 99, 90, 100], [100, 98, 60, 99]]}         | ${2}
  `('Base test: $n', ({ results, result }) => {
    expect(getRank(results)).toBe(result);
  });
});
