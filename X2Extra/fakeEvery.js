Array.prototype.myEvery = (cb, context) => {
  for (let i = 0; i < this.length; i++) {
    if (!cb.call(context, this[i], i, this)) return false;
  }
  return true;
};

const arr = [1, 2, 3, 4];

console.log(arr.myEvery((el) => el < 3));
