Array.prototype.fakeFilter = function (callback) {
  const resultArray = [];

  for (let index = 0; index < this.length; index++) {
    if (callback(index)) {
      resultArray.push(callback(this[index], index, this));
    }
  }
  return resultArray;
};

arr = [1, 2, 3, 4];

console.log(arr.fakeFilter((el) => el % 2 === 0));
