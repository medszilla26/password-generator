// Assignment Code
var generateBtn = document.querySelector("#generate");
var includeUppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var includeLowercase = ["abcdefghijklmnopqrstuvwxyz"];
var includeSymbols = ["!@#$%^&*()_+-="];
var includeNumbers = [0123456789];
var lengthConfirmed = " ";

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
      "Password must be between 10 to 128 character long, please try again!"
    );
  }

  var uppercaseConfirmed = confirm(" Would you like to include uppercase?");
  var lowercaseConfirmed = confirm(" Would you like to include lowercase?");
  var symbolsConfirmed = confirm(" Would you like to include symbols?");
  var numbersConfirmed = confirm(" Would you like to include numbers?");
}
