class Users {
  constructor(users) {
    this.myMap = new Map();
    users.forEach((user) => {
      //   myMap.set(user.id, { name: user[`name`], email: user[`email`] });
      this.myMap.set(user.id, {
        id: user[`id`],
        name: user[`name`],
        email: user[`email`],
      });
    });
  }
  addUsers(users) {
    users.forEach((user) => {
      this.myMap.set(user.id, {
        id: user[`id`],
        name: user[`name`],
        email: user[`email`],
      });
    });
  }
  getUserById(id) {
    return this.myMap.get(id);
  }
}

const mappedUser = new Users([
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
]);

console.log(mappedUser.getUserById(1)); // { id: 1, name: "Alice", email: "alice@example.com" };

mappedUser.addUsers([{ id: 3, name: "Ann", email: "ann@example.com" }]);

console.log(mappedUser.getUserById(3)); // { id: 3, name: "Ann", email: "ann@example.com" }
