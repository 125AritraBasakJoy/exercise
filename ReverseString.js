// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("joy"));

const myArray = "joy is my name ".split(" ");
function reverseString(myArray) {
    return myArray.reduceRight(function (accumulator, currentValue) {
        return accumulator + " " + currentValue;
    }, "");
}   
console.log(reverseString(myArray)); 