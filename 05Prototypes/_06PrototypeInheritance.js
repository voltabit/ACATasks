function log(message) {
  return console.log(message);
}
<<<<<<< HEAD:05Prototypes/06PrototypeInheritance.js
=======

>>>>>>> daae6bba73f7325f1461254954eb0ec8469441c5:05Prototypes/_06PrototypeInheritance.js
const arr = [1, 2, 3];
const human = {
  isHuman: true,
};
<<<<<<< HEAD:05Prototypes/06PrototypeInheritance.js
log(human instanceof Object);

=======
log(human.__proto__);
>>>>>>> daae6bba73f7325f1461254954eb0ec8469441c5:05Prototypes/_06PrototypeInheritance.js
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
