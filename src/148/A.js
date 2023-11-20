module.exports = {
  checkCountOfDamagedDragons: (dragons) => {
    var arr = [dragons[0], dragons[1], dragons[2], dragons[3]];
    var f = new Array(dragons[4]).fill(0);
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = arr[i] - 1; j < f.length; j += arr[i]) {
        f[j]++;
      }
    }
    for (let i = 0; i < f.length; i++) {
      if (f[i] > 0) {
        count++;
      }
    }
    return count;
  },
};
