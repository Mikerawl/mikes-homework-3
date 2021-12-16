

// prompt for the length of the password between 8 and 128 characters
// This should activate after the generate password button is clicked.  It works.

function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128")); 
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {       
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  }
}
// to gerate a random rounded number between 1 to 10; this works
var theRandomNumber = Math.floor(Math.random() * 9) + 1;
console.log(theRandomNumber);


  
// // The next three functions are supposed to generate random uppercase, lowercase,
// // and special character values.  I do not know if they work.

// // this is to generate a random uppercase letter
function upCase(length) {
  var randomUpper = " ";
  var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var upperLenght = upperCase.length;
  for (var i = 0; i < length; i++) {
    result =+ upperCase.charAt(math.floor(math.random() *
    upperLenght));
    console.log(randomUpper);
    } 
    return randomUpper;
}
  
// // this is to generate a random lowercase letter
function lowCase(length) {
      var randomLower = " ";
      var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
      var lowerLenght = lowerCase.length;
            for (var i = 0; i < length; i++) {
            result =+ lowerCase.charAt(math.floor(math.random() *
            lowerLenght));
        console.log(randomLower);
        } 
        return randomLower;
}

// this is to generate a random special character.
function specialChar(length) {
  var randomChar = " ";
  var special = "!@#$%^&*()";
  var specialC = lowerCase.length;
        for (var i = 0; i < length; i++) {
        result =+ lowerCase.charAt(math.floor(math.random() *
        lowerLenght));
    console.log(specialC);
    } 
    return specialC;
  }

// function makeid(length) {
//   var result           = '';
//   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for ( var i = 0; i < length; i++ ) {
//     result += characters.charAt(Math.floor(Math.random() * 
// charactersLength));
//  }
//  console.log(characters);
