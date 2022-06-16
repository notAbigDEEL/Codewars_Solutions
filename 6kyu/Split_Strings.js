/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

 */

function solution(str) {
  let length = str.length;
  let result = [];

  for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2));
  }
  if (str.length % 2 === 0) {
    return result;
  } else {
    let special = result[result.length - 1];
    result.pop();
    result.push(special + "_");
  }

  return result;
}

console.log(solution("abc"), ["ab", "c_"]);
console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
