// let menu = document.querySelector("#menu");
//  function CreateMenu(name){
//     let li = document.createElement("li");
//     li.textContent = name;
//     return li; 
//  }

//  menu.appendChild(CreateMenu("Coffee"));
//  menu.appendChild(CreateMenu("Tea"));
//  menu.appendChild(CreateMenu("Milk"));

// let show = document.getElementById("#menu");
// console.log(show.textContent);
let show = document.querySelector("#menu");
console.log(show.innerHTML);
let para = document.querySelector("#container");
//let para = document.createElement("p");
// para.textContent = "This is a paragraph";
// container.appendChild(para);
para.innerHTML = "<h1>This is a paragraph</h1>";


let sample = document.querySelector("#test");
let arr = ['C++', 'Java', 'Python', 'JavaScript'];

let fragment = document.createDocumentFragment();

arr.forEach((language) => {
    let li = document.createElement("li");
    li.textContent = language;
    fragment.appendChild(li);
})

sample.appendChild(fragment);

let test = document.querySelector("#test");
let li = document.createElement("li");
li.textContent = "Ruby";
test.insertBefore(li,test.ElementChild);
let test1 = document.querySelector("#app");
let names = ['Alice', 'Bob', 'Charlie', 'David'];
let checkTest = names.map((names) => {
    let li = document.createElement("li");
    li.textContent = names;
    return li;
});
test1.append(...checkTest);
test1.replaceChild(li,test1.firstElementChild);
