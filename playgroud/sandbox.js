let user = {
  // belongs to another code
  name: "John",
};

let id = Symbol("ID");

user[id] = 1;

console.log(user[id]); // we can access the data using the symbol as the key
