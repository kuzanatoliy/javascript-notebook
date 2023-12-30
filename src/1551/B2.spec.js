﻿const { getColorArray } = require('./B2');

describe('1551B2. Wonderful Coloring - 2', () => {
  it.each`
    n    | colorCount | numbers                                    | result
    ${1} | ${3}       | ${[3, 1, 1, 1, 1, 10, 3, 10, 10, 2]}       | ${[1, 3, 1, 2, 0, 3, 2, 1, 2, 3]}
    ${2} | ${4}       | ${[1, 1, 1, 1]}                            | ${[1, 2, 3, 4]}
    ${3} | ${1}       | ${[1]}                                     | ${[1]}
    ${4} | ${1}       | ${[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9]} | ${[1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0]}
    ${5} | ${2}       | ${[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9]} | ${[1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 0, 2, 1]}
    ${5} | ${3}       | ${[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9]} | ${[1, 3, 2, 1, 3, 3, 2, 3, 1, 2, 2, 0, 1]}
  `('Base test: $n', ({ colorCount, numbers, result }) => {
    expect(getColorArray(colorCount, numbers)).toStrictEqual(result);
  });
});
