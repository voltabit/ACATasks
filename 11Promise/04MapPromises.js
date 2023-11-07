function mapPromise(promise, transformer) {
  return new Promise(function (resolve, reject) {});
}

function transformer() {}

const prom1 = new Promise((res, rej) => rej(6));
