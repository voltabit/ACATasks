function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((result) => {
        try {
          resolve(transformer(result));
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

const prom1 = new Promise((resolve, reject) => {
  resolve(4);
  reject(new Error("fail"));
});

mapPromise(prom1, timesTwo)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
