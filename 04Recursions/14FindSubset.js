function isSubsetSum(array, checkNumber) {
  let n = array.length;

  function subsetSum(array, n, checkNumber) {
    if (checkNumber === 0) {
      return true;
    }
    if (n === 0 && checkNumber !== 0) {
      return false;
    }
    if (array[n - 1] > checkNumber) {
      return subsetSum(array, n - 1, checkNumber);
    }
    return (
      subsetSum(array, n - 1, checkNumber) ||
      subsetSum(array, n - 1, checkNumber - array[n - 1])
    );
  }
  return subsetSum(array, n, checkNumber);
}
let array = [2, 4, 6, 8];
console.log(isSubsetSum(array, 20));
