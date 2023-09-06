// Տրված է քառակսաձև մատրիցա(nxn), վերադարձնել նորը, որտեղ կլինեն ﬕայն այն
// տողերն  սյները որոնց գմարը չի գերազանցի նշված k թիվը

function newMatrix(matrix, sumLimit) {
  let rowSum = matrix.map((row) => row.reduce((a, b) => a + b));
  let colSum = matrix[0].map((discard, colIndex) =>
    matrix.reduce((cSum, b) => cSum + b[colIndex], 0)
  );
  return matrix.map((row, rIndex) =>
    row.map((cell, cIndex) =>
      rowSum[rIndex] <= sumLimit || colSum[cIndex] <= sumLimit ? cell : "x"
    )
  );
}

let nxm = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// let nxm = [
//   [1, 2, 3, 4],
//   [4, 5, 6, 7],
//   [7, 8, 9, 10],
//   [10, 11, 12, 13],
// ];

console.log(newMatrix(nxm, 12));

// [
//   [1, 2, 3],
//   [4, "x", "x"],
//   [7, "x", "x"],
// ];
