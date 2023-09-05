"use strict";
// Տրված է թվերի մատրիցա (զանվածների երկարությունը կարող է տարբեր լինել)
// գտնել աﬔնաﬔծ գումարը ունեցող array-ի ինդեքսը:

const matrix = [
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3],
  [1, 2, 3, 4],
  [199],
  [1, 2, 3, 4, 5, 6, 9, 180],
];

function findLargestSumIndex(arr) {
  let largestSum = -Infinity;
  let largestIndex = -1;

  arr.forEach((subArray, index) => {
    const sum = subArray.reduce((acc, val) => acc + val);
    if (sum > largestSum) {
      largestSum = sum;
      largestIndex = index;
    }
  });

  return largestIndex;
}

console.log(findLargestSumIndex(matrix));

// function findLargestElement(arr) {
//   let largestValue = 0;
//   let largestIndex = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (largestValue < Math.max(arr[i], largestValue)) {
//       largestValue = Math.max(arr[i], largestValue);
//       largestIndex = i;
//     }
//   }
//   return largestIndex;
// }

// console.log(findLargestElement(sumUpSubArray(matrix)));
