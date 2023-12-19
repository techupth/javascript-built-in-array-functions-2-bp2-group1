function isPalindrome(string) {
  let reverseWord = string.split("").reverse().join("")
  if (reverseWord === string){
    return true
  } else {
    return false
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false
