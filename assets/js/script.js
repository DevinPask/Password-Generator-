// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    // generate unique password
    var errorMsg = "";
    generatePassword(errorMsg);
}

function updatePasswordValue(password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password
function generatePassword(errorMsg) {

    var password = "";
    var promptMsg = "Password Length" + ((errorMsg.length > 0) ? " - " + errorMsg : "");
    var length = parseInt(window.prompt(promptMsg));
    var useLower = window.confirm("Use lowercase?");
    var useUpper = window.confirm("Use uppercase?");
    var useNums = window.confirm("Use numbers?");
    var useChars = window.confirm("Use special characters?");
    console.log(length, useLower, useUpper, useNums, useChars);
    var valid = length >= 8 && length <= 128 && (useLower || useUpper || useNums || useChars);
    console.log(valid);
    if (valid) {
        console.log(useLower, useUpper, useNums, useChars,length);
        while (password.length < length) {
            if (useLower && password.length < length) {
                password += getLower();
            }
            if (useUpper && password.length < length) {
                password += getUpper();
            }
            if (useNums && password.length < length) {
                password += getNums();
            }
            if (useChars && password.length < length) {
                password += getChars();
            }
            
            // update password value
            updatePasswordValue(password); 
        }
    } else {
        generatePassword("Invalid Password, Please Retry");
        
    }
}

function getLower() {
    var vals = "abcdefghijklmnopqrstuvwxyz";
    var random = Math.floor(Math.random() * vals.length);
    return vals.charAt(random);
}
function getUpper() {
    var vals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var random = Math.floor(Math.random() * vals.length);
    return vals.charAt(random);
}
function getNums() {
    var vals = "0123456789";
    var random = Math.floor(Math.random() * vals.length);
    return vals.charAt(random);
}
function getChars() {
    var vals = "!@#$%&*()_+-=[]|,./?><";
    var random = Math.floor(Math.random() * vals.length);
    return vals.charAt(random);
}

