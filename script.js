// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var randomChar = "";
var charObj = [
  {
    char: "!@#$%^&*()_+-=\/?,.{}[]",
    category: "Special Characters",
    choice: false
  },
  {
    char: "1234567890",
    category: "Number Characters",
    choice: false
  },
  {
    char: "abcdefghijklmnopqrstuvwxyz",
    category: "Lower Case Letters",
    choice: false
  },
  {
    char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    category: "Upper Case Letters",
    choice: false
  },
]







var generateBtn = () => {
var passwordLength = parseInt(prompt("Please enter a number between 8 and 128"));
var passwordString = "";
 if (passwordLength >= 8 && passwordLength <= 128){
   charObj.forEach(set => {
     var useChar = (prompt(`Would you like to include ${set.category} type yes or no`)).toUpperCase();
    if (useChar === "YES"){
      set.choice = true;
    }
    if (set.choice){
      randomChar = randomChar + set.char;
    }
   })
 }
else {
  alert("Hey let's try that again looks like something went wrong")
}
if(randomChar !== ""){
  for(i=1; i<=passwordLength; i++){
    passwordString = passwordString + randomChar.charAt(Math.floor(Math.random() * Math.floor((randomChar.length)-1)))
  }
  document.getElementById("password").value = passwordString
}
else{
  alert ("Please select an input type")
}
}

