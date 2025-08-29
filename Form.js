var Username = document.querySelector("#username");
var Email = document.querySelector("#email");
var Password = document.querySelector("#password");
var ConfirmPassword = document.querySelector("#password2");
var Form = document.querySelector("#myForm");

// Helper functions
function ShowError(input, message) {
    var FormControl = input.parentElement;
    FormControl.className = "form-control error";
    var small = FormControl.querySelector("small");
    small.innerText = message;
    small.style.color = "#e74c3c"; // error color
    small.style.visibility = "visible";
}

function ShowWarning(input, message) {
    var FormControl = input.parentElement;
    FormControl.className = "form-control warning";
    var small = FormControl.querySelector("small");
    small.innerText = message;
    small.style.color = "#f39c12"; // warning color
    small.style.visibility = "visible";
}

function ShowSuccess(input) {
    var FormControl = input.parentElement;
    FormControl.className = "form-control success";
}

function CheckInputLength(input, min, max) {
    if (input.value.trim() === "") {
        ShowError(input, GetFieldName(input) + " cannot be empty");
        return false;
    } else if (input.value.length < min) {
        ShowError(input, GetFieldName(input) + " must be at least " + min + " characters");
        return false;
    } else if (input.value.length > max) {
        ShowError(input, GetFieldName(input) + " must be less than " + max + " characters");
        return false;
    } else {
        ShowSuccess(input);
        return true;
    }
}

function CheckEmail(input) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        ShowSuccess(input);
        return true;
    } else {
        ShowError(input, "Email is not valid");
        return false;
    }
}

function CheckPasswordStrength(input) {
    var value = input.value;
    var hasNumber = /[0-9]/.test(value);
    var hasUpper = /[A-Z]/.test(value);
    var hasLower = /[a-z]/.test(value);
    var hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    var validLength = value.length >= 8;

    if (!hasNumber || !hasUpper || !hasLower || !hasSpecial || !validLength) {
        ShowWarning(input, "Password must be 8+ chars, include uppercase, lowercase, number & special char");
        return false;
    } else {
        ShowSuccess(input);
        return true;
    }
}

function CheckPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        ShowError(input2, "Passwords do not match");
        return false;
    } else {
        ShowSuccess(input2);
        return true;
    }
}

function GetFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

Form.addEventListener("submit", function(e) {
    e.preventDefault();
    var isUsernameValid = CheckInputLength(Username, 3, 15);
    var isEmailValid = CheckEmail(Email);
    var isPasswordLengthValid = CheckInputLength(Password, 8, 30);
    var isPasswordStrong = CheckPasswordStrength(Password);
    var isPasswordMatch = CheckPasswordsMatch(Password, ConfirmPassword);

   
    if (isUsernameValid && isEmailValid && isPasswordLengthValid && isPasswordStrong && isPasswordMatch) {
        var container = document.querySelector(".Container");
        container.innerHTML = "<h2>Welcome, " + Username.value + "!</h2><p>You have successfully registered.</p>";
    }
});
