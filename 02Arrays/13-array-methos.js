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
    splice // mutates the array, by adding/replacing elements. First argument is the index of the first change, second argument is the number of elements to replace
    flat // concatenates sub arrays. Argument defines how deep the array should be flattened
*/
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
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
