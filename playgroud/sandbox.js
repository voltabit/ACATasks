function f1() {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(s), 1000);
  });
  let s = 3;
  p.then(function (res) {
    console.log(res);
    return 1;
  }).then((res) => console.log(res));
}
f1(); // 3,1
function f1() {
  let p = new Promise((resolve, reject) => {
    resolve(s);
  });
  let s = 3;
  p.then(function (res) {
    console.log(res);
    return 1;
  }).then((res) => console.log(res));
}
f1(); /// error
