// Assignment Code
var generateBtn = document.querySelector("#generate");
var includeUppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var includeLowercase = ["abcdefghijklmnopqrstuvwxyz"];
var includeSymbols = ["!@#$%^&*()_+-="];
var includeNumbers = [0123456789];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

prompt(
  "Please enter the amount of characters you would like in your password:"
);
