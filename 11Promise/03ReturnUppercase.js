function uppercase(arg) {
  return new Promise((resolve, reject) => {
    setTimeout(function (arg) {
      if (typeof arg === "string") {
        resolve(arg.toUpperCase());
      } else {
        reject(arg);
      }
    }, 500);
  });
}

console.log(uppercase("hello world"));
