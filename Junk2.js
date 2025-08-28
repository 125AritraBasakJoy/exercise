let menu = document.querySelector ("#menu");
menu.classList.add("menu", "active", "highlight");
menu.classList.remove("highlight");
menu.classList.replace("active", "inactive");
menu.classList.toggle("highlight");

let extractDivInfo = document.querySelector("#Joy");
let width = extractDivInfo.offsetWidth;
let height = extractDivInfo.offsetHeight;
let bgColor = extractDivInfo.offsetColor;
console.log(`Width: ${width}, Height: ${height}, Background Color: ${bgColor}`);

let btn = document.querySelector("#btn");
// btn.addEventListener("click", function(e){
//     alert("Button Clicked");
// });

function ChangeColor(){
    alert("Button Clicked");
}

let checklink = document.querySelector("#Clicked");
checklink.onclick = function(){
    alert("This Message from DOM 0 Level handler");
   
}//DOM 0 Level handler
 let DOM2 = document.querySelector("#Demo");
 DOM2.addEventListener("click", function(){
    alert("This Message from DOM 2 Level handler");
 });//DOM 2 Level handler
 const MyInput = document.querySelector("#myInput");
 MyInput.addEventListener("focus", function(e) {
  e.target.style.background = "lightblue";
  e.target.style.color = "black";
  e.target.style.fontWeight = "bold";
  e.target.style.fontSize = "20px";
  e.style.padding = "10px";
  e.target.style.border = "2px solid blue";
  e.target.style.borderRadius = "15px";
  e.target.style.outline = "none";
 });

  MyInput.addEventListener("focus", function(e) {
    e.target.style.background ="coral";
    e.target.style.color = "black";
  });