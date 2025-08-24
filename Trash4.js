function testVar() {
    if(true) {
        var x = 10;
    }
    console.log(x); //Accessible here due to function scope
}
console.log("Testing var:");
testVar();

function testLet() {
    //let y;
    if(true) {
        y = 20; // RefferenceError if y is not declared with let
    }
    console.log(y); 
}
console.log("Testing let:");
testLet();

const z = 50;
//z = 60; // Error: Assignment to constant variable

const obj = {name: "Joy"};
obj.name = "Aritra"; // Allowed, modifying object property
console.log(obj.name); 
