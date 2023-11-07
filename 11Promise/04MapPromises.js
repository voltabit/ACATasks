/*
function mapPromise(promise, transformer) {
  return new Promise(function (resolve, reject) {
    resolve(transformer);
    reject((err) => {
      return err;
    });
  });
}
*/
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((result) => {
        try {
          let transformed = transformer(result);
          resolve(transformed);
        } catch (error) {
          reject(error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
const timesTwo = (value) => value * 2;

const prom1 = new Promise((res, rej) => {
  res(5);
  rej((err) => {});
});

console.log(mapPromise(prom1, timesTwo));
