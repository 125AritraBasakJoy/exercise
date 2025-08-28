let Username = document.querySelector("#username");
let Email = document.querySelector("#email");
let Password = document.querySelector("#password");
let ConfirmPassword = document.querySelector("#password2");
let Form = document.querySelector("#form");

function ShowError(input, message){
    const FormControl = input.parentElement;
    FormControl.className = "form-control error";
    const small = FormControl.querySelector("small");
    small.innerText = message;
}

function CheckInputLength(input, min, max){
    if(input.value.length < min){
        ShowError(input, `${GetFieldname(input)} must be at least ${min} characters`);
    } else if(input.value.length > max){
        ShowError(input, `${GetFieldname(input)} must be less than ${max} characters`);
    } else {
        ShowSuccess(input);
    }
}

function ShowSuccess(input){
    const FormControl = input.parentElement;
    FormControl.className = "form-control success";
}

function CheckEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        ShowSuccess(input);
    } else {
        ShowError(input, "Email is not valid");
    }
}

function GetFieldname(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function CheckPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        ShowError(input2, "Passwords do not match");
    }
}
Form.addEventListener("submit", function(e){
    e.preventDefault();

   CheckInputLength(Username, 3, 15);
    CheckInputLength(Password, 6, 30);
    CheckEmail(Email);
    CheckPasswordsMatch(Password, ConfirmPassword);
});
 