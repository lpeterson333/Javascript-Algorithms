// The Caesar cipher is one of the earliest known and simplest ciphers. It is a type of substitution cipher in which each letter in the plaintext is 'shifted' a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on. The method is named after Julius Caesar, who apparently used it to communicate with his generals.

//use this with the file caesarEncrypt.html

//a default shift of 13 is provided which corresponds to the ROT13 cipher
//when encrypting the case is preserved, and non-letters are unchanged.
//TODO:  screen should refresh with new input
//TODO:  safety checks on encryptMeStr input

//take each individual letter
//get the character code for that letter
//uppercase character codes are 65 to 90
//lowercase character codes are 97 to 122
//if not a letter upper or lower case move to next letter
//if a letter upper or lower case replace with character code + shift
//except that once character code + shift reaches 26 it has to go back to 0
//(charCode + shift) % 90  or (charCode + shift) % 122
//there was a way to do this using bit shift i think 
//if shiftNum = 3 then 65 becomes 68
// "use strict";
const {encrypt}= require("./encrypt") //require returns an object, use object destructuring to assign function encrypt to a variable of the same name
function caesarCipherEncryptor(){
  //to get user input for string to encrypt and shift to use
  //safety checks on encryptMeStr...not done yet
  let encryptMeStr = document.getElementById("encryptMeStr").value
  // if (encryptMeStr = "" || )
  

  let shift = document.getElementById('shift').value
  //safety checks on shift
  //check if shift is an integer 
  if (!/^[0-9]*$/.test(shift)){
    document.getElementById("errorMsg").innerHTML = "Error:  Enter a number for the shift value";
    return;
  }
  // const shiftNum = parseInt(shift,10)//convert string to number using base 10 decimal
  const shiftNum = shift*1 //converts string to number because of data type conversion in Javascript
  if (shiftNum < 0 || shiftNum > 26){
    document.getElementById("errorMsg").innerHTML = "Error:  The number must be between 0 and 26";
      return;
  }

  
// let strEncrypted = encrypt(encryptMeStr,shiftNum)

  //to output encrypted string to webpage
  document.getElementById("encryptMessage").innerHTML = "The top secret encrypted word is : "
  document.getElementById("shift").innerHTML = shiftNum;
  document.getElementById("encryptedStr").innerHTML = encrypt(encryptMeStr,shiftNum);
}

// function encrypt(encryptMeStr, shiftNum){

//   let encryptedStr = encryptMeStr.split('').map(e =>
//     {
//     if (e.charCodeAt(0) >= 97 && e.charCodeAt(0) <= 122){//lowercase
//       if((e.charCodeAt(0) + shiftNum) > 122){
//         return String.fromCharCode((e.charCodeAt(0) + shiftNum) % 122 + 97)
//       }else {
//         return  String.fromCharCode(e.charCodeAt(0) + shiftNum)
//       }
//     }else if(e.charCodeAt(0) >= 65 && e.charCodeAt(0) <= 90){//uppercase
//       if ((e.charCodeAt(0) + shiftNum) > 90){
//         return String.fromCharCode((e.charCodeAt(0) + shiftNum) % 90 + 65)
//       }else{
//         return  String.fromCharCode(e.charCodeAt(0) + shiftNum)
//       }
//    }}).join('')
//    return encryptedStr
//   }