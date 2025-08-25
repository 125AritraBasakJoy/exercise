const accountProtype = {
    deposite: function (amount) {
        this.balance += amount; 
    }, 
    withdraw: function (amount) {
        if (amount < this.balance) {
            console.log ("Inufficient Balance");
        }
        else {
            this.balance -= amount;
        }
    }, 
    valueOf: function () {
        return this.balance;
    }, 
    toString: function () {
                return "Account of " + this.name + " with balance: " + this.balance;
            }
        };
function createAccount  (name, balance = 0 ){
    const account = Object.create(accountProtype);
    account.name = name; 
    account.balance = balance;
    return account;
}
const acc1 = createAccount("Aritra", 1000);
console.log(acc1.toString());
acc1.deposite(500);
console.log(acc1.toString());
acc1.withdraw(2000);
console.log(acc1.toString());
acc1.withdraw(300);
console.log(acc1.toString());       