
let userName = "Malfoy";
let secretCode = "12345";
if (secretCode === "12345") {
    console.log("Welcome, " + userName + "!");
}
else {
    console.log("Access denied.");
}

let myString = "Harry"; 
let age = 20;
let checkValidation = (age => 18) ? "Access Entry to Hogwarts" : "Access Denied";
console.log(checkValidation);
myString += " Potter";
console.log(myString);

const information = {
    name: "Hermione",
    age: 18,
    house: "Gryffindor"
};
delete information.age;
console.log(information);

const seriesName = ["Game of Thrones", "Breaking Bad", "Stranger Things", "The Witcher"];
seriesName.push("The Crown");
console.log(seriesName);
seriesName.pop("The Crown");
console.log(seriesName);
const movieName = ["Harry Potter", "The Goblet of Fire", "The Deathly Hallows", "The Intern", "The Dark Knight"];
const movieReleaseYear = [2001, 2005, 2010, 2015, 2018];
console.log(" ");
console.log(movieName.at(1));
console.log(" ");
movieName.splice(2, 0, "The Philosopher's Stone");
console.log(movieName);
movieName.splice(3, 1);
console.log(movieName);
let movieAndSeries = movieName.concat(seriesName);
console.log(" ");
console.log("Movie and Series List: " + movieAndSeries.join(", "));
console.log(" ");
// console.log("Movie List: "+ movieName.join(", ").concat(" and Series List: " + seriesName.join(", ")));
const carName = ["Toyota", "Honda", "BMW", "Mercedes"];
const iterator = carName.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
function check(testCheck) {
    //return testCheck <= 2017;
    return testCheck <= 2020; 
}
console.log(movieReleaseYear.every(check));

let fruit = ["Apple", "Banana", "Cherry", "Date"];
let index = 2; 
console.log(fruit.at(index));
console.log(fruit.fill("Mango", 1, 4)); //value start, end

function wordCount() {
    return movieName.filter(function (word){
        return word.length > 20; 
    });
}
console.log(wordCount());

//20th August, 2025
const letArray = [1, 2, 3, 4, 5, 3];

function testArray() {
    return letArray.findIndex(function (element){
        return element >= 3;
    });
    //return letArray.indexOf(3);
}

function testArray2(){
    return letArray.find(function (element){
        return element > 3;
    });
};

function testArray3() {
    return letArray.findLast(function(element){
        return element > 3; 
    });
}

console.log(testArray(3));
console.log(letArray.some(testArray));
console.log(letArray.indexOf(4, 2));
console.log(letArray.includes(6));
console.log(letArray.lastIndexOf(3));
console.log(testArray2());

let fruits = ["Apple", "Banana", ["Cherry", "Date"]];
let fruits1 = ["Apple", "Banana", ["Cherry", "Date", ["Elderberry", ["Fig", "Grape", "Honeydew"]]]];
console.log(fruits.flat());
console.log(fruits1.flat(1)); //declaring depth as 1
console.log(fruits1.flat(Infinity)); //declaring depth as Infinity

let numbers = [1, 2, 3, 4, 5];
function myArrayMethod() {
    return numbers.flatMap(function (num) {
        return (num * 4)/3;
    });
}
console.log(myArrayMethod());

function myArrayMethod2(){
    return fruits.forEach(function (fruit){
        console.log(fruit);
    });
}
console.log(myArrayMethod2());

console.log(carName.join("-"));

const checkCarName = carName.keys();
for (const key of checkCarName) {
    console.log((key + 1) + ". " + carName[key]);
}

function myArrayMethod3(fruit) {
    return fruit.map(function (fruitName) {
        //return fruitName.toUpperCase();
        return fruitName.toLowerCase();
    });
}
console.log(myArrayMethod3(fruit));

const transactions = [
  { type: "deposit", amount: 1000 },
  { type: "withdraw", amount: 300 },
  { type: "deposit", amount: 500 }
];
function calculateBalance(transactions) {
    return transactions.reduce((balance, transaction) => {
        if (transaction.type === "deposit") {
            return balance + transaction.amount;
        } else if (transaction.type === "withdraw") {
            return balance - transaction.amount;
        }
        return balance;
    }, 0);
}
console.log("Total balance: " + calculateBalance(transactions));

let checkNumber = numbers.shift();
console.log("Shifted number: " + checkNumber); 

console.log("Array after shift: " + fruit.slice(2,4));

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months.sort());