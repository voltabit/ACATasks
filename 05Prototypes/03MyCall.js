Function.prototype.myCall = function (obj, ...args) {
  obj.this = this;
  const result = this(...args);
  return result;
};

const bike = { name: "giant", type: "road bike", color: "green" };
function paint(obj, color) {
  this.color = color;
}
console.log(myCall(paint("blue")));
