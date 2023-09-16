Function.prototype.myCall = function (obj, ...args) {
  obj.this = this;
  const result = this(...args);
  return result;
};
