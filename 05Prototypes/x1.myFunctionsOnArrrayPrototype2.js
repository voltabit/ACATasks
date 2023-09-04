Array.prototype.myMap = function (func) {
  const newArray = [];
  this.forEach((element) => {
    newArray.push(func(element));
  });
  return newArray;
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.myMap((i) => i + 1));
