const savedResults = new Map();
savedResults.set(1, 1);
savedResults.set(2, 1);

function findFibonacci(n) {
  if (savedResults.get(n)) {
    return savedResults.get(n);
  } else {
    const fibo = findFibonacci(n - 1) + findFibonacci(n - 2);
    savedResults.set(n, fibo);
    return fibo; //
  }
}

console.log(findFibonacci(20));
console.log(savedResults);
