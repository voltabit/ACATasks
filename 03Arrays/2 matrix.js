/*
Տրված է թվերի մատրիցա (nxm), դրս բերել բոլոր տողերի ﬕնիմﬓերից բաղկացած զանգվածը:
*/
const nxm = [[2, 3, 4, 5, 6, 7], [3], [4, 15, 98], [95], [1, 2, 3, 4, 5, 6, 9]];

// function findMinimumValues(arr) {
//   return arr.map((element) => findMin(element));
// }

// function findMin(arr) {
//   let min = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//   }
//   return min;
// }

function findMinimumValues(arr) {
  return arr.map((element) => Math.min(...element));
}

console.log(findMinimumValues(nxm));
