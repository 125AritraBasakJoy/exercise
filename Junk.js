let ul = document.createElement("ul");
ul.id = "List";

let li1 = document.createElement("li");li1.textContent = "Item 1";
ul.appendChild(li1);

let li2 = document.createElement("li");li2.textContent = "Item 2";
ul.appendChild(li2);        

let li3 = document.createElement("li");li3.textContent = "Item 3";
ul.appendChild(li3);

let script = document.createElement("script");
script.src = "Junk.js"; 
document.body.appendChild(script);
document.body.appendChild(ul);