module.exports = {
  getYears: (weight1, weight2) => {
    for (var i = 0; weight1 <= weight2; i++) {
      weight1 *= 3;
      weight2 *= 2;
    }
    return i;
  },
};
