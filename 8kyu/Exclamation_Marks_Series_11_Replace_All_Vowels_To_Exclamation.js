/* Description:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
 */

function replace(s) {
  let result = "";
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      result += "!";
    } else {
      result += s[i];
    }
  }
  return result;
}
