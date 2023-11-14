const ALPHABET =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';
const MOD = 1000000007;

module.exports = {
  checkLabelCount: (string) => {
    let count = 0;
    let result = 1;
    for (var i = 0; i < string.length; i++) {
      let ans = ALPHABET.indexOf(string[i]);
      let j = 0;
      while (ans > 0) {
        if (ans % 2 == 0) count++;
        j++;
        ans = ans >> 1;
      }
      count += 6 - j;
    }
    for (i = 0; i < count; i++) {
      result *= 3;
      if (result > MOD) {
        result %= MOD;
      }
    }
    return result;
  },
};
