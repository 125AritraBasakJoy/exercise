// let a = 10; 
// let b = 20 
// //let c; 
// try {
//     console.log("Trying to divide by zero");
//     // c = (a + b)/0; 
//      console.log("Result: " + c);

//     throw new Error("Custom error thrown");
// }
// catch(err) {
//     //console.log("Error caught: " + err.message);
//     console.log("HI");
// }
// finally {
//     console.log("Finally block executed"); 
// }

// const readline = require('readline-sync');
// function checkSSCRegistrationNumber(number){
//     try{
//         if(number.length ===8){
//             return number;
//         }
//     }
//     catch(err){
//         console.log("Error: " + err.message);
//     }
//     finally{
//         console.log("Function executed");
//     }
//     return "Invalid Registration Number";
// }
// console.log(checkSSCRegistrationNumber("123456"));
function getData(value){
    this.value = value;
}

function readData(value) {
    console.log("Reading data: " + value);
    if (value < 0.3 ) {
         console.log("Soil is too dry. Please water the plant.");
        throw new Error ("Sensor May Be Disconnected!! Please check your connection.");
        //console.log("Soil is too dry. Please water the plant.");
    }
    else {
        console.log("Soil moisture is adequate.");
    }
        
    //console.log("Reading data: " + value);

    return value * 100;

}

function savedToDatabase(value) {
    if (value < 0.3 ) {
        throw new Error ("Database Error!! Unable to save data.");
    }
    console.log("Data saved: " + value);
}

    // let value = 0.1; 
    // let data = readData(value);
    // savedToDatabase(data);
    // console.log("Operation completed");

 var sensorData = [
        new getData(0.3),
        new getData(0.5),
       new getData(0.1),
       new getData(0.4),
        new getData(0.0),
        new getData(0.6) ]

 for (var i = 0; i < sensorData.length; i++) {
     try {
         let sensorValue = sensorData[i].value;
         let data = readData(sensorValue);   
         savedToDatabase(data);             
     } catch (err) {
         console.log("Error: " + err.message);
     } finally {
         console.log("Operation completed for sensor " + (i+1));
        
   }
}

// const arr1 = [1, 2, 3];
// let sum = 0;
// function testArray(arr) {
//     for(i=0; i<arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(testArray(arr1));