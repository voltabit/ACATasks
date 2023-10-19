const input = [1, 2, 3, 4, 5, 1];
function findRepetition(arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
    if (set.size !== i + 1) return true;
  }
  return false;
}

console.log(findRepetition(input));
