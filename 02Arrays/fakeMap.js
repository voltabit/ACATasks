Array.prototype.fakeMap = function (callback, index = 0, arr = this) {
  const resultArray = [];

  for (index; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this));
  }
  return resultArray;
};

const cb = function (num) {
  return num * 2;
};
// const res = arr.map((el, idx, array) => cb());

array = [3, 6];
arr1 = [1, 2, 3, 4];

const res2 = array.fakeMap((el, idx, arr1) => cb(el));

console.log(res2);
