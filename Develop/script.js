// Assignment Code
var generateBtn = document.querySelector("#generate");
var includeUppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var includeLowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
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
var includeNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
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
  } else {
    lengthConfirmed >= 10 || lengthConfirmed <= 128;
    var uppercaseConfirmed = confirm(
      "Select OK if you would like to include UPPERCASE letters"
    );
    var lowercaseConfirmed = confirm(
      "Select OK if you would like to include LOWERCASE letters"
    );
    var symbolsConfirmed = confirm(
      "Select OK if you would like to include SYMBOLS"
    );
    var numbersConfirmed = confirm(
      "Select OK if you would like to include NUMBERS"
    );
  }

  if (
    uppercaseConfirmed === false &&
    lowercaseConfirmed === false &&
    symbolsConfirmed === false &&
    numbersConfirmed === false
  ) {
    alert("Please select one or more character types");
  } else {
    var passwordChoice = [];
    if (uppercaseConfirmed)
      passwordChoice = passwordChoice.concat(includeUppercase);
    if (lowercaseConfirmed)
      passwordChoice = passwordChoice.concat(includeLowercase);
    if (symbolsConfirmed)
      passwordChoice = passwordChoice.concat(includeSymbols);
    if (numbersConfirmed)
      passwordChoice = passwordChoice.concat(includeNumbers);
    var password = "";
    for (var i = 1; i <= lengthConfirmed; i++) {
      var random =
        passwordChoice[Math.floor(Math.random() * passwordChoice.length)];
      password = password + random;
    }
    return password;
  }
}
