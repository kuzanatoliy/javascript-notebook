﻿module.exports = {
  isItPossibleToTransform: (arr) =>
    arr.reduce((a, b) => a + b, 0) > 0 ? 'YES' : 'NO',
};
