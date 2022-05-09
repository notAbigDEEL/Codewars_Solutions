/* Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

 */

function solution(string) {
  let strArr = string.split("");
  let str = "";
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i].toUpperCase()) {
      str += ` ${strArr[i]}`;
    } else {
      str += strArr[i];
    }
  }
  return str;
}

console.log(solution("camelCasing"), "camel Casing");
console.log(solution("identifier"), "identifier");
console.log(solution("camelCasingTest"), "camel Casing Test");
