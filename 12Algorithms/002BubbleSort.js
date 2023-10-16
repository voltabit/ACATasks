function bubbleSort(arr) {
  const sortedArray = [...arr];
  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[i] > sortedArray[j]) {
        [sortedArray[j], sortedArray[i]] = [sortedArray[i], sortedArray[j]];
      }
    }
  }
  return sortedArray;
}
const array = [3, 88, 99, 32, 12, 1, 6, 9, 45, 21, 7, 4];
console.log(bubbleSort(array));
