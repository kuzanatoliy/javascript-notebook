﻿const { transformMatrix } = require('./B');

describe('1512B. Almost Rectangle', () => {
  it.each`
    n    | matrix                                                                                                          | result
    ${1} | ${[['.', '.', '*', '.'], ['.', '.', '.', '.'], ['*', '.', '.', '.'], ['.', '.', '.', '.']]}                     | ${[['*', '.', '*', '.'], ['.', '.', '.', '.'], ['*', '.', '*', '.'], ['.', '.', '.', '.']]}
    ${2} | ${[['*', '.'], ['.', '*']]}                                                                                     | ${[['*', '*'], ['*', '*']]}
    ${3} | ${[['.', '*'], ['.', '*']]}                                                                                     | ${[['*', '*'], ['*', '*']]}
    ${4} | ${[['*', '.', '*'], ['.', '.', '.'], ['.', '.', '.']]}                                                          | ${[['*', '.', '*'], ['.', '.', '.'], ['*', '.', '*']]}
    ${5} | ${[['.', '.', '.', '.', '.'], ['.', '.', '*', '.', '.'], ['.', '.', '.', '.', '.'], ['.', '*', '.', '.', '.']]} | ${[['.', '.', '.', '.', '.'], ['.', '*', '*', '.', '.'], ['.', '.', '.', '.', '.'], ['.', '*', '*', '.', '.']]}
    ${6} | ${[['.', '.', '.', '.'], ['.', '.', '.', '.'], ['*', '.', '.', '.'], ['*', '.', '.', '.']]}                     | ${[['.', '.', '.', '.'], ['.', '.', '.', '.'], ['*', '.', '.', '*'], ['*', '.', '.', '*']]}
    ${7} | ${[['.', '*', '.'], ['.', '*', '.'], ['.', '.', '.']]}                                                          | ${[['*', '*', '.'], ['*', '*', '.'], ['.', '.', '.']]}
  `('Base test: $n', ({ matrix, result }) => {
    expect(transformMatrix(matrix)).toStrictEqual(result);
  });
});
