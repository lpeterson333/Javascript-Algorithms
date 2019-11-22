function checkPalindrome(str){
  let reversedStr = str.split('').reverse().join('')
  return reversedStr == str ? str + " is a Palindrome" : str + " Is Not A Palindrome"
}

console.log(checkPalindrome("NOON"))
console.log(checkPalindrome("coffee"))