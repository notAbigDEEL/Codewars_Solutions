/* Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"

 */

function solution(value) {
  let result = "";
  let length = value.toString().length;

  for (let i = 0; i < 5 - length; i++) {
    result += "0";
  }
  result += value;

  return `Value is ${result}`;
}

console.log(solution(5), "Value is 00005");
console.log(solution(12345), "Value is 12345");
console.log(solution(0), "Value is 00000");
