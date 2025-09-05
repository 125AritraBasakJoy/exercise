let count = 0;
const valueBox = document.querySelector("#value > div");
let value = document.getElementById("value");
let incrementbtn = document.getElementById("increment");
let decrementbtn = document.getElementById("decrement");
let resetbtn = document.getElementById("reset");
let message = document.getElementById("message");


incrementbtn.addEventListener("click", () => {
    count++;
    valueBox.textContent = count;
    message.textContent = "";
});

decrementbtn.addEventListener("click", () => {
    if(count > 0){
    count--;
    valueBox.textContent = count;
    message.textContent = "";
    } else {
        message.textContent = "Value cannot be negative";
    }
});

resetbtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset?")) {
        count = 0;
        valueBox.textContent = count;
        message.textContent = "";
    }
});

