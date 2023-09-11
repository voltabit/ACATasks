"use strict";

function binarySearch(arr, num, start = 0, end = arr.length - 1) {
  if (
    arr.length === 0 ||
    num < arr[0] ||
    num > arr[arr.length - 1] ||
    (start === end && arr[start] !== num)
  )
    return -1;

  let middle = Math.round((start + end) / 2);
  if (num === arr[middle]) return middle;

  if (num < arr[middle]) return binarySearch(arr, num, start, middle - 1);
  else return binarySearch(arr, num, middle + 1, end);
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 9)); // Output: 4
console.log(binarySearch(sortedArray, 10)); // Output: -1
