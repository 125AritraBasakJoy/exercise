// function myStudent() {
//     this.studentName = "John Doe";
//     this.studentAge = 21;
//     this.studentCity = "New York";
//     //return "Name: " + studentName + ", Age: " + studentAge + ", City: " + studentCity;
// }
//  const student = new myStudent();
//     console.log(student.studentName);

// function myStudent(studentName, studentAge, studentCity) {
//     this.studentName = studentName; 
//     this.studentAge = studentAge; 
//     this.studentCity = studentCity;
// }

// var student1 = new myStudent("Alice", 22, "Los Angeles");
// var student2 = new myStudent("Bob", 23, "Chicago");
// var student3 = new myStudent("Charlie", 24, "Houston"); 

// console.log(student1.studentName + ", " + student1.studentAge + ", " + student1.studentCity);
// console.log(student2.studentName + ", " + student2.studentAge + ", " + student2.studentCity);
// console.log(student3.studentName + ", " + student3.studentAge + ", " + student3.studentCity);     

function Account(owner, balance) {
    this.owner = owner ;
    this.balance = balance ;
}

function depositeBalance(amount){
    this.balance = balance + amount;
    console.log("New balance after deposite: " + this.balance);
}

function withdrawBalance(amount){
    if (amount > this.balance) {
        console.log("Insufficient balance!");
    } else {
        this.balance = balance - amount;
        console.log("New balance after withdraw: " + this.balance);
    }
}
function displayAccount(){
    console.log("Account Owner: " + this.owner + ", Balance: " + this.balance);
}

function showBalance(){
    console.log("Current balance: " + this.balance);
}

 var accountData = [
        new Account("Joy", 1000),
        new Account("Nusrat", 5000),
        new Account("Aditya", 3000),
        new Account("Hasib", 7000),
        new Account("Rakib", 2000)
    ];

for (var i = 0; i < accountData.length; i++) {
    try{
         console.log("Account " + (i + 1) + "----"); 
         console.log( "Owner: " + accountData[i].owner + ", Balance: " + accountData[i].balance);
    }
    catch (error) {
        console.error("Error displaying account data: " + error.message);
    }
    finally {
        console.log("Operation completed for account " + (i+1));
    }
   
}    
