const arr = [1, 2, 3];
// arr.__proto__ = Array.prototype
// arr.__proto__.__proto__ = Object.prototype
// arr.__proto__.__proto__.__proto__ = null;
// arr.__proto__ > Array.prototype > Object.prototype > null

const human = {
  isHuman: true,
};
// human.__proto__ > Object.prototype > null

const str = "";
// str.__proto__ = String.prototype > Object.prototype > null

const user = {
  name: "John",
  __proto__: human,
};
// user.__proto__ > human.prototype > Object.prototype > null

const car = {
  hasEngine: true,
};
//

const mercedes = {
  name: "mercedes",
  __proto__: car,
};
//

const bmw = Object.create(null);
//

const emptyObj = {};
//

function fn() {
  console.log("hello, world!");
}
//

const emptyWithoutProto = Object.create(null);
//

const num = 12;
//

const isAuth = false;
//
