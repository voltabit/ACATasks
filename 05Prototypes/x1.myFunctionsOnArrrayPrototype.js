//add myMap, myReduce, myFilter onto the Array.prototype

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.myMap = function (func) {
  const newArray = [];
  arr.forEach((element) => {
    newArray.push(func(element));
  });
  return newArray;
};
// console.log(arr.myMap((i) => i + 1));

Array.prototype.myReduce = myReduce;

function myReduce(cb, initialValue) {
  if (this.length === 0) return;

  let i = initialValue === undefined ? 1 : 0;
  let acc = initialValue ?? this[0];
  initialValue = initialValue ?? this[0];

  for (i = 0; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }
  return acc;
}

const cb = (accumulator, element) => accumulator + element;

console.log(arr.myReduce(cb));

// myFilter function
Array.prototype.myFilter = myFilter;
function myFilter(cb) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) newArray.push(this[i]);
  }
  return newArray;
}
const cb2 = (i) => i % 2 === 0;

console.log(arr.myFilter(cb2));
console.log(arr.myFilter((i) => i % 2 !== 0));

// myFind function
arr.__proto__.myFind = myFind;
function myFind(cb) {
  let result;
  for (var i = 0; i < this.length; i++) {
    if (cb(this[i])) return this[i];
  }
  if (result === undefined) return null;
  return result;
}

console.log(arr.myFind(cb2));

// myPush
arr.__proto__ = Array.prototype;
