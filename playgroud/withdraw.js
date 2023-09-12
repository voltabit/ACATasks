const bankAccount = {
  accountNumber: "123456789",
  balance: 1000,
  accountHolder: "John Doe",
  deposit: function (amount) {
    if (amount <= 0) return "Wrong amount";
    return (this.balance += amount);
  },
  withdraw: function (amount) {
    if (amount > this.balance || amount <= 0)
      return "Insufficient funds or wrong amount";
    return `Withdrew ${amount}. New balance is ${(this.balance -= amount)}`;
  },
};

console.log(bankAccount.deposit(100));
