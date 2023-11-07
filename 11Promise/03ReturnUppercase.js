/*

*/
function toUppercase(str) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof str === "string") {
        resolve(str.toUpperCase());
      } else {
        reject(str);
      }
    }, 500);
  });
}

toUppercase("hello world")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
toUppercase(336699)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
