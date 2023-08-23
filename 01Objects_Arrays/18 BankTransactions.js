"use strict";
/*
Given an object representing a bank account with properties like accountNumber, balance, and accountHolder.
Write functions to deposit and withdraw money from the account.
*/

const updateBalance = function (amount, transactionType) {
  switch (transactionType) {
    case "deposit":
      if (amount <= 0) {
        console.log(
          "Invalid deposit amount. Please deposit a positive amount."
        );
        break;
      }
      bankAccount.balance += amount;
      console.log(
        `Deposited \$${amount}. New balance: \$${bankAccount.balance}`
      );
      break;
    case "withdraw":
      if (amount > bankAccount.balance) {
        console.log("Insufficet balance or invalid withdrawal amount.");
        break;
      }
      bankAccount.balance -= amount;
      console.log(
        `Withdrew \$${amount}. New balance: \$${bankAccount.balance}`
      );
      break;
  }
};

const bankAccount = {
  accountNumber: "123456789",
  balance: 1000,
  accountHolder: "John Doe",
};

updateBalance(500, "deposit");
updateBalance(200, "withdraw");
updateBalance(-100, "deposit");
updateBalance(5000, "withdraw");
