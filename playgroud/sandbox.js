// example on Array
let a = [1, 2, 3];
let arr = new Array(1, 2, 3);

console.log(a);
console.log(arr);

console.dir(Array);

console.log(a.__proto__);
console.log(a.__proto__.__proto__);

// Object create

const elf = {
  race: "Arda",
  fight: function () {
    console.log("Fight for Middle Earth");
  },
};

const legolasTheElf = Object.create(elf);
legolasTheElf.name = "Legolas";

// pitfall
const legolas = {
  ...legolasTheElf,
  name: "Legoas",
};

console.log(legolas);
