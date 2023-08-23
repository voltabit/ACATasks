"use strict";

/*
Given an array of cars with properties like make, model, and year, print out the car's details in a
readable format for given care make.
*/
const carDetails = function (carMake) {
  let result = "";
  cars.forEach((car) => {
    if (car.make === carMake) {
      result += `Make: ${car.make}, Model: ${car.model}, Year: ${car.year} `;
    }
  });
  result = `"${result}"`; // the final space is not extra and concatanating '/b' is not helping.
  return result;
};

const cars = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2023,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2021,
  },
  {
    make: "Toyota",
    model: "Camry",
    year: 2023,
  },
  {
    make: "Chevrolet",
    model: "Silverado",
    year: 2022,
  },
  {
    make: "Toyota",
    model: "Rav4",
    year: 2023,
  },
];
console.log(carDetails("Toyota"));
