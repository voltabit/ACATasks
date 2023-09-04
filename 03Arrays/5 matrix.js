// Տրված է քառակսաձև մատրիցա(nxn), վերադարձնել նորը, որտեղ կլինեն ﬕայն այն
// տողերն  սյները որոնց գմարը չի գերազանցի նշված k թիվը

const nxm = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function limitSum(arr, k) {
  const newArray = [];
  let rowSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let columnSum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (!newArray[i][j]) {
        newArray[i][j] = [];
      }
      columnSum += arr[i][j];
    }
    if (columnSum <= k) {
      newArray[i][j] = arr[i][j];
    }
  }
}

// function limitSum(arr, k) { // check row sums
//   return arr.map((item) => {
//     return item.reduce((sum, value) => sum + value, 0) <= k ? [] : item;
//   });
// }

console.log(limitSum(nxm, 14));
