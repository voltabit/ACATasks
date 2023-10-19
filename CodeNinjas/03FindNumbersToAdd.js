function findNumbers(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(num - arr[i])) {
      return [Math.min(num - arr[i], arr[i]), Math.max(num - arr[i], arr[i])];
    }
  }
  return `No such numbers`;
}

const array = [-2, 5, 9, 11];

console.log(findNumbers(array, -3));
