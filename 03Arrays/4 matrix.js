// Տրված է հավասարաչափ մատրիցա (nxm).
// շրջել մատրիցան այնպես որ տողերը դառնան սյներ, իսկ սյները՝ տողեր

const nxm = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// function flipMatrix(arr) {
//   let x = [];
//   for (let i = 0; i < nxm.length; i++) {
//     for (let j = 0; j < nxm[i].length; j++) {
//       if (!x[j]) x[j] = [];
//       x[j][i] = arr[i][j];
//     }
//   }
//   return x;
// }
function flipMatrix(arr) {
  return arr[0].map((discard, i) => arr.map((row) => row[i]));
}
console.log(flipMatrix(nxm));
