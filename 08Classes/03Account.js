class Account {
  #balance;
  constructor(name, balance) {
    this.name = name;
    this.#balance = balance;
    id = Date.now() + Math.floor(Math.random() * 100);
  }
  get balance() {
    return this.#balance;
  }
  set balance(newBalance) {
    if (newBalance < 0) {
      throw new Error("Balance cannot be negative");
    }
    this.#balance = newBalance;
  }
  credit(amount) {
    if (amount <= 0) {
      throw new Error("Wrong amount");
    }
    this.#balance += amount;
  }
  debit(amount) {
    if (amount <= 0) {
      throw new Error("Wrong amount");
    } else if ((this.#balance -= amount < 0)) {
      throw new Error("Insufficient amount!");
    } else {
      this.#balance -= amount;
    }
  }
  transferTo(account, amount) {
    this.debit(amount);
    account.credit(amount);
  }
  static identifyAccounts(account) {}
}

const saving = new Account("saving", 1000);
const current = new Account("current", 8000);
saving.credit(5000);
saving.debit(1000);
saving.debit(2000);
saving.transferTo(current, 1000);
console.log(saving.getBalance());
/*
console.log(saving.balance);
console.log(current.balance);
const res = Account.identifyAccounts(current, saving);
console.log(saving.balance);
saving.balance = 10000;
saving.setBalance(20000);
console.log(saving);
*/
