"use strict";

/*
  Տրված է քառակսաձև մատրիցա (nxn) բաղկացած զրոներից և ﬔկերից. գտնել ﬕայն
  ﬔկերից բաղկացած աﬔնաﬔծ ներդրված քառակսաձև(kxk) մատրիցայի երկարթյնը (k).
*/

const arr = [
  [1, 0, 1, 1, 0],
  [1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

function f(arr) {
  const len = arr.length;
  let maxNum = 0;

  // create an empty array n x n
  // create array using new to fomat it during creation otherwise we need to set the length before being able to apply array methods on it

  const newArr = new Array(len)
    .fill(0)
    .map((item) => (item = new Array(len).fill(0)));
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[i][j] === 1) {
        if (i === 0 || j === 0) {
          newArr[i][j] = arr[i][j];
        } else {
          if (
            arr[i - 1][j - 1] === 1 &&
            arr[i - (1)[j] === 1 && arr[1][j - 1] === 1]
          ) {
            newArr[i][j] = arr[i][j] + 1;
          }
        }
      }
    }
  }
  console.log(newArr);
}

f(arr);
