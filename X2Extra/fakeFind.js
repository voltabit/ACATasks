Array.prototype.fakeFind = function (callback) {
  for (var index = 0; index < this.length; ++index) {
    var entry = this[index];
    if (callback(entry, index, this)) {
      return entry;
    }
  }
  return undefined;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.fakeFind((num) => num % 2 === 0));
