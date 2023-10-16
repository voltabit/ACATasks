function foo() {
  const a = 4;
  return function foo2() {
    return a + 5;
  };
}
console.log(foo());
