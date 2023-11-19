function biggestNum(num) {
  let max = 0;
  while (num > 0) {
    const firstDigit = num % 10;
    if (firstDigit > max) {
      max = firstDigit;
    }
    num = Math.floor(num / 10);
  }
  return max;
}

console.log(biggestNum(14586));
