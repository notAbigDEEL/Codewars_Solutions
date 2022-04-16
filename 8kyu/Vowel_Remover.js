/*Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

    don't worry about uppercase vowels
    y is not considered a vowel for this kata
 */

function shortcut(string) {
  let strArr = string.split("");
  let result = [];
  for (let i = 0; i < strArr.length; i++) {
    if (
      strArr[i] === "a" ||
      strArr[i] === "e" ||
      strArr[i] === "i" ||
      strArr[i] === "o" ||
      strArr[i] === "u"
    ) {
      strArr[i] = "";
    }
  }
  return strArr.join("");
}

console.log(shortcut("hello"), "hll");
console.log(shortcut("codewars"), "cdwrs");
console.log(shortcut("goodbye"), "gdby");
console.log(shortcut("HELLO"), "HELLO");
