/* Write a function that checks if a given string (case insensitive) is a palindrome.

*/

function isPalindrome(x) {
  return x.toLowerCase() === x.split("").reverse().join("").toLowerCase();
}

console.log(isPalindrome("Aa"), true);
console.log(isPalindrome("ab"), false);
console.log(isPalindrome("aBc"), true);
console.log(isPalindrome("aBcBa"), true);
console.log(isPalindrome("aBcBaC"), false);
