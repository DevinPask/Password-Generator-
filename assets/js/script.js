//generate variables



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password
function generatePassword() {

    var password = "";
    var length = window.prompt("Password Length");
    var useLower = window.confirm("Use lowercase?");
    var useUpper = window.confirm("Use uppercase?");
    var useNums = window.confirm("Use numbers?");
    var useChars = window.confirm("Use special characters?");

    console.log(useLower, useUpper, useNums, useChars);
    while (password.length < length) {
        if (useLower) {
            password += getLower();
        }
        if (useUpper) {
            password += getUpper();
        }
        if (useNums) {
            password += getNums();
        }
        if (useChars) {
            password += getChars();
        }
    }
    return password;
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

var getPlayerName = function() {
    var name = "";
  
    while (name === "" || name === null) {
      name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
  };

