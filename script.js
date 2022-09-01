// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// create the lenght of the password and return when the choosen criteria is not selected
function generatePassword() {
  var passwordLenght = parseInt(prompt("Choose a number lenght between 8-128 characters"))
  if (passwordLenght < 8 || passwordLenght > 128 || isNaN(passwordLenght)) {
    return 'Please choose an answer within the given criteria'
  }
  //create the prompts
  var upperCase = confirm("Would you like the passwrod to have uppercase letters?")
  var lowerCase = confirm("Would you like the passwrod to have lowercase letters?")
  var numbers = confirm("Would you like the passwrod to have numbers letters?")
  var specialCharacter = confirm("Would you like the passwrod to have specialCharacter letters?")

  //what heppens if the given criteria is not selected?
  if (!upperCase && !lowerCase && !numbers && !specialCharacter) {
    return 'Please choose an answer within the given criteria'
  }
 // define each prompts
  var notHack = []
  if (upperCase) notHack += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (lowerCase) notHack += "abcdefghijklmnopqrstuvwxyz"
  if (numbers) notHack += "1234567890"
  if (specialCharacter) notHack += "!@#$%^&*"
  var password = ''
    //the final password calculated after all of the prompts were answered
  for (i = 0; i < passwordLenght; i++) {
    var indexU = Math.floor(Math.random() * notHack.length)
    password += notHack[indexU]
  }
  return password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
