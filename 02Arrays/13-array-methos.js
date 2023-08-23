"use strict";
/*
Implement 
    unshift // add a new element to the beginning of the array
    shift // remove the first element from the array
    pop // remove the last element from the array
    push // add a new element to the end of the array
    forEach // call a function for each element in the array
    findIndex // return the index of the first element in the array that passes the check
    find // return the value of the first element in the array that passes the check
    every // returns true if all elements of the array pass the check
    some // returns true if any element of the array passes the check
    map // returns a new array where each element is created by calling a function on the original array
    filter // creates a new array filled with elements that pass the check
    reduce // returns a single value, calculated from the array elements
    slice // returns a new, subset array, defined by the first element and the last element from the original array
    splice // mutates the array, by adding/replacing elements. First argument is the index of the first change, second argument is the number of elements to replace. Returns array of removed elements
    flat // concatenates sub arrays. Argument defines how deep the array should be flattened
*/

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// UNSHIFT
function myUnshift(array, element) {
  for (let i = array.length; i >= 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = element;
  return array.length;
}
// numArray.unshift(99);
// console.log(numArray);
myUnshift(numArray, 99);
console.log(numArray);

// SHIFT
function myShift(array) {
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
}
numArray.shift();
console.log(numArray);
myShift(numArray);
console.log(numArray);

// POP
function myPop(array) {
  let lastElement = array[array.length - 1];
  array.length = array.length - 1;
  return lastElement;
}
console.log(myPop(numArray));
console.log(numArray);

// PUSH
function myPush(array, element) {
  array[array.length] = element;
}
myPush(numArray, 55);
console.log(numArray);

// FOREACH

function myForEach(array, myFunction) {
  for (let item in array) {
    myFunction(item);
  }
}

let sum = 0;
function calcSum(num) {
  sum += Number(num);
  return sum;
}

// numArray.forEach(calcSum);
myForEach(numArray, calcSum);
console.log(sum);

function myFindIndex(arr, myFunc) {
  for (let i = 0; i < arr.length; i++) {
    if (myFunc(arr[i])) return i;
  }
}
function checkSize(size) {
  return size > 3;
}

console.log(myFindIndex(numArray, checkSize));

// find
function myFind(arr, myFunc) {
  for (let i = 0; i < arr.length; i++) {
    if (myFunc(arr[i])) return arr[i];
  }
}
function checkSize(size) {
  return size > 10;
}

console.log(myFind(numArray, checkSize));

// EVERY
function myEvery(arr, myFunc) {
  for (let i = 0; i < arr.length; i++) {
    if (!myFunc(arr[i])) return false;
  }
  return true;
}
function checkSize(size) {
  return size > 1;
}

console.log(myEvery(numArray, checkSize));

// SOME
function mySome(arr, myFunc) {
  for (let i = 0; i < arr.length; i++) {
    if (myFunc(arr[i])) return true;
  }
  return false;
}
function checkSize(size) {
  return size > 16;
}

console.log(mySome(numArray, checkSize));

// MAP
function myMap(arr, myFunc) {
  let newArray = [];
  for (let item in arr) {
    newArray.push(myFunc(arr[item]));
  }
  return newArray;
}

function addOne(num) {
  return ++num;
}
console.log(myMap(numArray, addOne));

// FILTER
function myFilter(arr, myFunc) {
  let newArray = [];
  for (let item in arr) {
    if (myFunc(arr[item])) newArray.push(arr[item]);
  }
  return newArray;
}
function checkSize(size) {
  return size > 3;
}

console.log(myFilter(numArray, checkSize));

// REDUCE
function myReduce(array, callback, initialValue) {
  let accumulator;
  !initialValue ? (accumulator = 0) : (accumulator = initialValue);

  for (let item in array) {
    accumulator = callback(item, accumulator);
  }
  return accumulator;
}
let sum = 0;
function calcSum(num, initVal) {
  return Number(num) + initVal;
}
console.log(myReduce(numArray, calcSum));

// SLICE
function mySlice(arr, firstEl, lastEl) {
  let newArray = [];
  for (let i = firstEl; i < lastEl; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}
// console.log(numArray.slice(0, 4));
console.log(mySlice(numArray, 0, 4));

// SPLICE
// Mutates the array, by removing/adding/replacing elements.
// First argument is the index of the first change, second argument is the number of elements to replace.
// The rest are the elements to add. Returns array of removed elements
function mySplice(arr, elementIndex, elementsToRemove, ...elementsToInsert) {
  const removedElements = arr.slice(
    elementIndex,
    elementIndex + elementsToRemove
  );
  const elementsToReturn = arr.slice(elementIndex + elementsToRemove);
  arr.length = elementIndex;
  arr.push(...elementsToInsert, ...elementsToReturn);
  return removedElements;
}
console.log(mySplice(numArray, 3, 1, 8, 8, 8));
console.log(numArray);

// FLAT
const layeredArray = [1, 2, [3, 4], [[5, [6]], 7, 8], 9];
function myFlat(arr, depth = 1) {
  let flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      flattenedArray = flattenedArray.concat(myFlat(arr[i], depth - 1));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

console.log(myFlat(layeredArray, 2));
// console.log(layeredArray.flat(2));
