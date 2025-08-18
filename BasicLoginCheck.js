const userName = "admin";
const password = "password123";
function loginCheck(inputUserName, inputPassword) {
    if (inputUserName === userName && inputPassword === password) {
        return "Login successful!";
    } else {
        return "Login failed. Please check your username and password.";
    }
}

const result1 = loginCheck("admin", "password123"); 
console.log(result1); 

// const result1 = loginCheck("admin", "1234"); 
// console.log(result1); 