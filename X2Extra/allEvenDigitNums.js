/*
- put the digits of the largest number in an array
- create an empty array to hold the output
- starting from the larger number, generate numbers using even digits
- check if the number is within the range:
- If yes, add the number to the result array
-- and generate the next number
- If no, return the result array

* check the digits:
- start from the leftmost digit of the higher number
- If a digit is odd, remove one from it and move on to the next digit on the right
- If a digit is even, move on to the next digit on the right
- When no more digits are left to the right, ckeck if the number is in the range
- If the number is smaller than the smaller number use the previous digit and move on to the next digit on the right
- Otherwise, move down to the closest higher number and check
- If the number being checked is larger than the higher number, return the array
*/

function findEvenDigitNums(num1, num2) {
  const rangeStart = Math.min(num1, num2);
  const rangeEnd = Math.max(num1, num2);

  let digitsArr = digitize(rangeEnd);
  generateNumbers(digitsArr);
}

function generateNumbers(array) {
  if (array[0] % 2 === 1)
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 1) {
        array[i]--;
      } else {
        while (array[i] >= 0) {
          generateNumbers(array[i]);
        }
      }
      return result;
    }
}
function digitize(num) {
  const digitsArray = [];
  while (num > 0) {
    digitsArray.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return digitsArray;
}

function checkNumber(digitsArray) {
  for (let i = 0; i < digitsArray.length; i++) {
    if (!(digitsArray[i] % 2 === 0)) {
      return false;
    }
  }
  return true;
}

function numeralize(arr) {
  result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    result = result * 10 + arr[i];
  }
  return result + arr[arr.length - 1];
}

console.log(findEvenDigitNums(19, 246)); // console
