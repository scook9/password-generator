// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// This is called in writePassword(), just needs to generate the password
function generatePassword() {
  var userCriteria = {
    length: prompt("What is the desired password length? (8-128 characters)"), // int
    lowercase: confirm("Include lowercase characters?"), // bool
    uppercase: confirm("Include uppercase characters?"), // bool
    numeric: confirm("Include numeric characters?"), // bool
    special: confirm("Include special characters?"), // bool
  };
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
