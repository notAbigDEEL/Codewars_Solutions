/* 
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
 */

function capitalize(s) {
  let result = [];
  let result0 = "";
  let result1 = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 1) {
      result0 += s[i];
      result1 += s[i].toUpperCase();
    } else {
      result0 += s[i].toUpperCase();
      result1 += s[i];
    }
  }
  result.push(result0);
  result.push(result1);
  return result;
}

console.log(capitalize("abcdef"), ["AbCdEf", "aBcDeF"]);
console.log(capitalize("codewaRs"), ["CoDeWaRs", "cOdEwArS"]);
