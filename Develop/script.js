// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// variables for password criteria
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var specialCharactersArray = specialCharacters.split("");
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var lowercaseCharactersArray = lowercaseCharacters.split("");
var uppercaseCharactersArray = lowercaseCharacters.toUpperCase().split("");
var numericArray = "0123456789".split("");

// This is called in writePassword(), just needs to generate the password
function generatePassword() {
  var validcharacters = [];
  var generatedPassword = "";

  var userCriteria = {
    length: prompt("What is the desired password length? (8-128 characters)"), // int
    lowercase: confirm("Include lowercase characters?"), // bool
    uppercase: confirm("Include uppercase characters?"), // bool
    numeric: confirm("Include numeric characters?"), // bool
    special: confirm("Include special characters?"), // bool
  };

  if (userCriteria.lowercase === true) {
    validcharacters = validcharacters.concat(lowercaseCharactersArray);
  }
  if (userCriteria.uppercase === true) {
    validcharacters = validcharacters.concat(uppercaseCharactersArray);
  }
  if (userCriteria.numeric === true) {
    validcharacters = validcharacters.concat(numericArray);
  }
  if (userCriteria.special === true) {
    validcharacters = validcharacters.concat(specialCharactersArray);
  }

  //main loop for random password
  for (var i = 0; i < userCriteria.length; i++) {
    // generatedPassword = generatedPassword +
  }
}

// Write password to the #password input
// This is called at the end of the code, just need var password to be the correct password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
