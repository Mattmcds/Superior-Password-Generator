var generateBtn = document.getElementById("generate");

var allLowCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var allUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var allNumCharacters = [0,1,2,3,4,5,6,7,8,9];
var allSpecCharacters = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];

function generatePassword() {
  var passLength = window.prompt("Type a length between 8-128 characters.");
    console.log(passLength);

  if (passLength < 8) {
    alert('Not enough characters, minimum of 8.');
    return;
  }
  if (passLength > 128) {
    alert('To many characters, maximum of 128.');
    return;
  }

  var addLowerCase = window.confirm("Press 'OK' for lower Case characters or 'CANCEL' to exclude.");
    console.log(addLowerCase);
 

  var addUpperCase = window.confirm("Press 'OK' for Upper Case characters or 'CANCEL' to exclude.");
    console.log(addUpperCase);
   

  var addNumbers = window.confirm("Press 'OK' for Numeric characters or 'CANCEL' to exclude.");
    console.log(addNumbers);
   

  var addSpecial = window.confirm("Press 'OK' for Special characters or 'CANCEL' to exclude.");
    console.log(addSpecial);
    

  var passwordInput = {
    length: passLength,
    lowerCase: addLowerCase,
    upperCase: addUpperCase,
    numeric: addNumbers,
    special: addSpecial
  }

  return passwordInput;

}


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
    console.log(password)

  var passwordInformation =[];
    console.log(passwordInformation)

  if (password.lowerCase) {
    for (i = 0; i < allLowCase.length; ++i) {
      passwordInformation.push(allLowCase[i]);
    }
  }

  if (password.upperCase) {
    for (i = 0; i < allUpperCase.length; ++i) {
      passwordInformation.push(allUpperCase[i]);
    }
  }

  if (password.numeric) {
    for (i = 0; i < allNumCharacters.length; ++i) {
      passwordInformation.push(allNumCharacters[i]);
    }
  }

  if (password.special) {
    for (i = 0; i < allSpecCharacters.length; ++i) {
      passwordInformation.push(allSpecCharacters[i]);
    }
  }

  var randomPassword = [];

  for (let i = 0; i < password.length; ++i) {
    var randomPicker = Math.floor(Math.random() *Math.floor(passwordInformation.length));
      randomPassword.push(passwordInformation[randomPicker])
  }

  console.log(randomPassword)
    
    var finishedPass = randomPassword.join('');
      console.log(finishedPass)

    document.getElementById("password").textContent = finishedPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
