module.exports.encrypt = function encrypt(encryptMeStr, shiftNum){

  let encryptedStr = encryptMeStr.split('').map(e =>
    {
    if (e.charCodeAt(0) >= 97 && e.charCodeAt(0) <= 122){//lowercase
      if((e.charCodeAt(0) + shiftNum) > 122){
        return String.fromCharCode((e.charCodeAt(0) + shiftNum) % 122 + 97)
      }else {
        return  String.fromCharCode(e.charCodeAt(0) + shiftNum)
      }
    }else if(e.charCodeAt(0) >= 65 && e.charCodeAt(0) <= 90){//uppercase
      if ((e.charCodeAt(0) + shiftNum) > 90){
        return String.fromCharCode((e.charCodeAt(0) + shiftNum) % 90 + 65)
      }else{
        return  String.fromCharCode(e.charCodeAt(0) + shiftNum)
      }
   }}).join('')
   return encryptedStr
  }

