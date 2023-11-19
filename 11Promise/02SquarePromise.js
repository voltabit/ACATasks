function squarePromise(inputPromise) {
  return new Promise((resolve, reject) => {
    inputPromise.then(
      (result) => {
        if (typeof result === "number") {
          resolve(result * result);
        } else if (typeof result === "string") {
          let num = Number(result);
          if (isNaN(num)) {
            reject(`Cannot convert '${result}' to a number!`);
          } else {
            resolve(num * num);
          }
        } else {
          reject(`Invalid input type: ${typeof result}`);
        }
      },
      (error) => {
        reject(error);
      }
    );
  });
}

const prom1 = new Promise((res) => res(6)); //call
const prom2 = new Promise((res) => res("4")); //call
const prom3 = new Promise((res) => res("tex")); //call
// const prom4 = new Promise((res, rej) => res(), rej(true)); //call

squarePromise(prom1)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
squarePromise(prom2)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
squarePromise(prom3)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
