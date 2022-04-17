/*Description:

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

 */

function remove(s) {
  let strArr = s.split("");

  if (strArr[strArr.length - 1] === "!") {
    strArr.pop();
  }
  return strArr.join("");
}


console.log(remove("Hi!"), "Hi");
console.log(remove("Hi!!!"), "Hi!!");
console.log(remove("!Hi"), "!Hi");
console.log(remove("!Hi!"), "!Hi");