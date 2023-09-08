function partial(cb, ...args) {
  return (...newArgs) => cb(...args, ...newArgs);
}

const add5 = partial(add, 5);
console.log(add(10, 20));
