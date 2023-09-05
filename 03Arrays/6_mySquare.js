"use strict";
const arr = [
  [1, 0, 1, 1, 0, 0],
  [1, 1, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];
// const arr = [
//   [0, 1],
//   [1, 0],
// ];

function largestSquareArea(arr) {
  const depth = arr.length;
  let maxNum = 0;
  const newArr = Array.from({ length: depth }, () =>
    Array.from({ length: depth }, () => 0)
  );
  for (let i = 0; i < depth; i++) {
    for (let j = 0; j < depth; j++) {
      if (arr[i][j] === 1) {
        if (i === 0 || j === 0) {
          newArr[i][j] = 1;
        } else {
          newArr[i][j] =
            Math.min(newArr[i - 1][j - 1], newArr[i - 1][j], newArr[i][j - 1]) +
            1;
        }
        if (newArr[i][j] > maxNum) maxNum = newArr[i][j]; // else-ի ցիկլից դուրս եմ հանում, որ 1-անդամանի քառակուսու դեպքում էլ ճիշտ աշխատի
      }
    }
  }
  console.log(newArr);
  return maxNum;
}

console.log(largestSquareArea(arr));
