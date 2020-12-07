// This is and empty string to store object choices.
var randomChar = "";
// An object to house the charecters, title of choices and boolean of the choices.
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

// Main function that's called on onClick when hitting Generate Password on the app page.
var generateBtn = () => {
  //Prompt for to pick between password legnth of 8 to 128, if outside bounds sends an error.
var passwordLength = parseInt(prompt("Please enter a number between 8 and 128"));
// Empty variable string to store value for getElementByID
var passwordString = "";
//If within bounds, prompts user to select categories and store responses
 if (passwordLength >= 8 && passwordLength <= 128){
   charObj.forEach(set => {
     var useChar = (prompt(`Would you like to include ${set.category} type yes or no`)).toUpperCase();
    if (useChar === "YES"){
      set.choice = true;
    }
    else if (useChar === "NO"){
      set.choice = false;
    }
    if (set.choice){
      randomChar = randomChar + set.char;
    }
   })
 }
else {
  alert("Hey let's try that again looks like something went wrong")
}
//This is a for loop to iterate through the length of the password and sets each character to a random value of user choice.
if(randomChar !== ""){
  for(i=1; i<=passwordLength; i++){
    passwordString = passwordString + randomChar.charAt(Math.floor(Math.random() * Math.floor((randomChar.length)-1)))
  }
  //This assigns the generated password to the placeholder string set in the text area
  document.getElementById("password").value = passwordString;
 
}
//This is the error if the user prompts no to every category
else{
  alert ("Please select an input type")
}

}

