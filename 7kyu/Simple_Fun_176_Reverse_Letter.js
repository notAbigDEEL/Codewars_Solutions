/* Task

Given a string str, reverse it omitting all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string

 */

function reverseLetter(str) {
  let strArr = str.split("").reverse();
  let result = "";
  for (let i = 0; i < strArr.length; i++) {
    if (
      (strArr[i] >= "A" && strArr[i] <= "Z") ||
      (strArr[i] >= "a" && strArr[i] <= "z")
    ) {
      result += strArr[i];
    }
  }
  return result;
}

console.log(reverseLetter("Hello World"), "dlroW olleH");
console.log(reverseLetter("CodEWaRs"), "sraWedOC");
console.log(reverseLetter("az$kiu$"), "uikza");
