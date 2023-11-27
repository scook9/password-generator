// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// variables for password criteria
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var specialCharactersArray = specialCharacters.split("");
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var lowercaseCharactersArray = lowercaseCharacters.split("");
var uppercaseCharactersArray = lowercaseCharacters.toUpperCase().split("");
var numericArray = "0123456789".split("");

// Will be used at end of generated password array to ensure characters are at a random index
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// This is called in writePassword(), just needs to generate the password
function generatePassword() {
  var validcharacters = [];
  var generatedPasswordArray = []; //add pw to this array, order does not matter as it is shuffled later in this function
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
    generatedPasswordArray =
      generatedPasswordArray +
      lowercaseCharactersArray[
        Math.floor(Math.random() * lowercaseCharactersArray.length)
      ];
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

  console.log("Pre-shuffle and pw loop ");
  console.log(generatedPasswordArray);

  //main loop for random password
  for (var i = 0; i < userCriteria.length; i++) {
    // generatedPassword = generatedPassword +
  }
  console.log(generatedPasswordArray);
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
