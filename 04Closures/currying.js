function curry(func = () => {}) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return function (...restArgs) {
      return curried(...args, ...restArgs);
    };
  };
}

const curried = curry(function (a, b, c, r, t) {
  return a + b + c + r + t;
});

console.log(curried(1)(2)(3)(4, 5, 5, 6, 6));
