function removeDuplicates(array) {
  const mySet = new Set();
  for (let i = 0; i < array.length; i++) {
    mySet.add(array[i]);
  }
  return Array.from(mySet);
}

const arr = [1, 1, 3, 5, 6, 6, 8, 9, 9, 10];
console.log(removeDuplicates(arr));
