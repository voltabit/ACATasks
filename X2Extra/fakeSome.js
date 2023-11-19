Array.prototype.fakeSome = function (callback, context) {
  if (this.length === 0) {
    return false;
  }
  if (!Array.isArray(this)) {
    throw new TypeError();
    return;
  }

  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) return true;
  }
  return false;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.fakeSome((num) => num % 2 === 0));
