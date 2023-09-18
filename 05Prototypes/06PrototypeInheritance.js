function log(message) {
  return console.log(message);
}
const arr = [1, 2, 3];
const human = {
  isHuman: true,
};
log(human instanceof Object);

const str = "";
const user = {
  name: "John",
  __proto__: human,
};
const car = {
  hasEngine: true,
};
const mercedes = {
  name: "mercedes",
  __proto__: car,
};
const bmw = Object.create(null);
const emptyObj = {};
function fn() {
  console.log("hello, world!");
}
const emptyWithoutProto = Object.create(null);
const num = 12;
const isAuth = false;
