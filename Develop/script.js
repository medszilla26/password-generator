// Assignment Code
var generateBtn = document.querySelector("#generate");
var includeUppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var includeLowercase = ["abcdefghijklmnopqrstuvwxyz"];
var includeSymbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
];
var includeNumbers = [0123456789];
var lengthConfirmed = "";
var uppercaseConfirmed;
var lowercaseConfirmed;
var symbolsConfirmed;
var numbersConfirmed;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lengthConfirmed = prompt(
    "Please enter the amount of characters you would like in your password:(Password must be between 10-128 characters in length)"
  );
  if (lengthConfirmed <= 9 || lengthConfirmed >= 129) {
    alert(
      "Password must be between 10 to 128 characters long, please try again!"
    );
    return;
  } 
  
  else {
    lengthConfirmed >= 10 || lengthConfirmed <= 128;
    var uppercaseConfirmed = confirm("Select OK if you would like to include UPPERCASE letters");
    var lowercaseConfirmed = confirm("Select OK if you would like to include LOWERCASE letters");
    var symbolsConfirmed = confirm("Select OK if you would like to include SYMBOLS");
    var numbersConfirmed = confirm("Select OK if you would like to include NUMBERS");
}
