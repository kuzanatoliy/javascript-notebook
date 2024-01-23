﻿const { isItPossibleToShiftTheConveyor } = require('./B');

describe('1786B. Cake Assembly Line', () => {
  it.each`
    n    | props         | positions1            | positions2            | result
    ${1} | ${[3, 10, 5]} | ${[65, 95, 165]}      | ${[40, 65, 145]}      | ${'YES'}
    ${2} | ${[5, 2, 1]}  | ${[1, 6, 11, 16, 21]} | ${[4, 9, 14, 19, 24]} | ${'YES'}
    ${3} | ${[3, 3, 2]}  | ${[13, 22, 29]}       | ${[5, 16, 25]}        | ${'NO'}
    ${4} | ${[4, 4, 1]}  | ${[27, 36, 127, 136]} | ${[35, 50, 141, 144]} | ${'YES'}
  `('Base test: $n', ({ props, positions1, positions2, result }) => {
    expect(isItPossibleToShiftTheConveyor(props, positions1, positions2)).toBe(
      result
    );
  });
});
