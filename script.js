var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var special = "!@#$%^&*()"
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "1234567890";


// prompt for the length of the password between 8 and 128 characters
// This should activate after the generate password button is clicked.  It works.

function generatePassword() {
  var combinedChar = "";

  var passwordlength = prompt("How many characters would you like your password? Choose between 8 and 128");
  if (!passwordlength) {
    alert("This needs a value");
    return "";
  }
  if (passwordlength < 8 || passwordlength > 128) {
    alert("You must choose between 8 and 128");
    return ""
  }
  confirmNumber = confirm("Will this contain numbers?");
  confirmCharacter = confirm("Will this contain special characters?");
  confirmUppercase = confirm("Will this contain Uppercase letters?");
  confirmLowercase = confirm("Will this contain Lowercase letters?");

  if (confirmNumber === true) {
    combinedChar += numbers;
  }
  if (confirmCharacter === true) {
    combinedChar += special;
  }
  if (confirmUppercase === true) {
    combinedChar += upperCase
  }
  if (confirmLowercase === true) {
    combinedChar += lowerCase
  }
  if (combinedChar.Length === 0) {
    alert("You did not select anything");

    return ""
  }
  var randomPassword = "";
  for (var i = 0; i < passwordlength; i++) {
    randomPassword += combinedChar.charAt(Math.floor(Math.random() * combinedChar.length));

      
  }

  return randomPassword;

}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);