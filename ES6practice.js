function Test (x,y){
    return x+y;
}
console.log(Test());

let age = 16;
let message;
message = (age >= 18) ? "You can drive" : "You cannot drive";
console.log(message);

let speed = 100;
let speedMessage = (speed > 120) ? "Too Fast" : (speed < 40) ? "Too Slow" : "OK";
console.log(speedMessage);

// function TestArray(toy, toyBox = []) {
//     return toyBox.push(toy);
// }
// console.log(TestArray("Car", ["Doll", "Ball"]));

function sum(x, y=5, z=10) {
    console.log(arguments.length);
    return x + y + z;
}
console.log(sum(10, 20, 30));

const TestArray = (toy, toyBox = []) => toyBox.push(toy);
console.log(TestArray("Car", ["Doll", "Ball"]));

function RESTParameter(a,b,...x){
    console.table(x);
}
RESTParameter(1,2,3,4,5,6,7,8,9)

let cart1 = ["Shirt", "Pant"];
let cart2 = ["T-Shirt", "Polo"];

let marge = [...cart1, ...cart2];
console.log(marge);

function TotalBills(...price){
    return price.reduce((price, sum) => price + sum, 0);
}
const bills = [500, 600, 300, 4500];
function DiscountPrice(){
    const total = TotalBills(...bills);
    if(total > 2000){
    return total > 200 ? total * 0.95 : total;;
    }
    return total;
}
console.log("Total Bill: " + TotalBills(...bills));
console.log("After Disount: "+DiscountPrice())

function display(...user){
     console.log("Name: " +user.name + "Age: " +user.age);
}
var user = { name: "Joy", age: 23 };
console.log(user);