// count the length of the longest repetition of '1's

const input = [1, 1, 0, 0, 1, 1, 1];

function counter(arr) {
  let maxRepetition = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
      if (count > maxRepetition) {
        maxRepetition = count;
      }
    } else {
      count = 0;
    }
  }
  return maxRepetition;
}

console.log(counter(input));
