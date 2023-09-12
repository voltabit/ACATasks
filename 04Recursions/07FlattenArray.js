// Write a recursive function to flatten an array of nested arrays.
function flattenArray(array, newArray = []) {
  if (array.length === 0) return newArray;
  const element = array.shift();
  if (Array.isArray(element)) {
    flattenArray(element, newArray);
  } else newArray.push(element);
  return flattenArray(array, newArray);
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
