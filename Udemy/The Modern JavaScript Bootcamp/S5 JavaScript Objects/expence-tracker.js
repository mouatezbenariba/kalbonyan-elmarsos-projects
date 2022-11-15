let myAccount = {
  name: "ElMouatez Billah Benariba",
  expenses: 0,
  income: 0,
}

let addExpenses = function(account, amount) {
   account.expenses += amount;
}

let addIncome = function(account, amount) {
  account.income += amount; 
}

let resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
}

let getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}

addIncome(myAccount,100);
addExpenses(myAccount,50);
addExpenses(myAccount,25);
let summary = getAccountSummary(myAccount);
console.log(summary);
resetAccount(myAccount);
summary = getAccountSummary(myAccount);
console.log(summary);