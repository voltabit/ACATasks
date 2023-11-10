Promise.resolve()
  .then(() => {
    console.log(3);
    return 1;
  })
  .catch((e) => console.log(e, 4))
  .finally((res) => console.log(res, 5))
  .then((res) => console.log(res));
console.log(6);
let a = 5;
setTimeout(() => {
  console.log(a);
  a = 10;
}, 0);
let p = new Promise((resolve, reject) => {
  console.log(a);
  a = 25;
  resolve();
});
p.then((res) => {
  console.log("final result ", res);
});
console.log(a);
