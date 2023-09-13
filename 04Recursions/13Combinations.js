function generateCombinations(array, size) {
  const result = [];

  const combinations = (arr, start, depth, currentCombination) => {
    if (depth === 0) {
      result.push([...currentCombination]);
      return;
    }
    for (let i = start; i <= arr.length - depth; i++) {
      currentCombination.push(arr[i]);
      combinations(arr, i + 1, depth - 1, currentCombination);
      currentCombination.pop();
    }
  };
  combinations(array, 0, size, []);
  return result;
}

const inputArray = [1, 2, 3, 4];
console.log(generateCombinations(inputArray, 2));
