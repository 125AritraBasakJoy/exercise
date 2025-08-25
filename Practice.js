// function MyNumber(num = 100) {
//     this.num = num;
//     this.name = "MyNumberObject";
// }

// MyNumber.prototype.valueOf = function() {
//     return this.num;
// };

// MyNumber.prototype.toString = function() {
//     return this.name;
// };

// const myNum = new MyNumber();
// //console.log(myNum()); 
// console.log(myNum * 2);
// console.log(myNum.name);

function BankAccount(balance = 0, userName) {
    this.balance = balance;
    this.userName = userName;
}
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
}
BankAccount.prototype.withdraw = function(amount) {
    if(amount <= this.balance) {
        this.balance -= amount;
    } else {
        console.log("Insufficient funds");
    }
}
BankAccount.prototype.valueOf = function() {
    return this.balance;
}
BankAccount.prototype.toString = function() {
    return "Account of " + this.userName + " with balance: " + this.balance;
}
const acc = new BankAccount(1000, "Aritra");
console.log(acc.toString());
acc.deposit(500);
console.log(acc.toString());
acc.withdraw(2000);
console.log(acc.toString());
acc.withdraw(300);
console.log(acc.toString());