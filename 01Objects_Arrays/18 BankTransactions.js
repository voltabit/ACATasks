"use strict";
/*
Given an object representing a bank account with properties like accountNumber, balance, and accountHolder.
Write functions to deposit and withdraw money from the account.
*/

const updateBalance = function (amount, transactionType) {
  switch (transactionType) {
    case "deposit":
      if (amount <= 0) {
        return "Invalid deposit amount. Please deposit a positive amount.";
      }
      bankAccount.balance += amount;
      return `Deposited \$${amount}. New balance: \$${bankAccount.balance}`;
    case "withdraw":
      if (amount > bankAccount.balance)
        return "Insufficient balance or invalid withdrawal amount.";
      bankAccount.balance -= amount;
      return `Withdrew \$${amount}. New balance: \$${bankAccount.balance}`;
  }
};

const bankAccount = {
  accountNumber: "123456789",
  balance: 1000,
  accountHolder: "John Doe",
};

console.log(updateBalance(500, "deposit"));
console.log(updateBalance(200, "withdraw"));
console.log(updateBalance(-100, "deposit"));
console.log(updateBalance(5000, "withdraw"));
