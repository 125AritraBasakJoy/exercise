//Select the element with ID "ID1"
// let ID1 = document.getElementById("ID1");
// ID1.innerHTML = "Hello World from JS";
// let ClassName1 = document.getElementsByClassName("Class1")[1];

// ClassName1.innerHTML = "This is a paragraph from JS";

// let Heading5 = document.getElementsByName("Name1")[0];
// Heading5.innerHTML = "This is heading 5 from JS";
// let H1 = document.getElementsByTagName("h1")[2];

// H1.innerHTML = "Hello World from JS";
// document.querySelector("#ID1");
// document.querySelector(".Class1");
// document.querySelectorAll("h1");
// function ClickMe() {
//     // document.write("Button Clicked");
//     document.getElementById("time").innerHTML = Date();
// }
// let pNote = document.querySelector(".para")
// console.log(pNote.parentNode);//To get the parent node
//let ParentDiv = document.querySelector(".ParentDiv");
// console.log(ParentDiv.FirstChild);
// console.log(ParentDiv.firstElementChild)
// console.log(ParentDiv.lastElementChild);
//child Nodes for Get all child elements
//console.log(ParentDiv.childNodes);
//detect in between text nodes and element nodes
let Current = document.querySelector(".current");
console.log(Current.nextElementSibling);
console.log(Current.previousElementSibling); 
let div = document.createElement("div");
div.classname = "NewDivClass";
div.id = "NewDiv";
// div.innerHTML = "<p>This is a paragraph</p>";
// //for showing this div in the body
let text = document.createTextNode("This is a text node");
let h1 = document.createElement("h1");
h1.textContent = "This is a heading";
div.appendChild(h1);
//h1.appendChild(text);
document.body.appendChild(div);
let testPara = document.querySelector(".Class1");
testPara.style .color = "red";
testPara.style.fontSize = "30px";
testPara.style.backgroundColor = "yellow";
testPara.style.padding = "10px";
testPara.style.border = "2px solid black";
testPara.style.margin = "10px";
testPara.style.textAlign = "center";
testPara.style.fontFamily = "Arial, sans-serif";
testPara.style.borderRadius = "10px";
testPara.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
testPara.style.width = "50%";
testPara.style.margin = "auto";
testPara.style.transition = "all 0.3s ease";
testPara.style.cursor = "pointer";
testPara.addEventListener("mouseover", function() {
    testPara.style.backgroundColor = "lightblue";
});
