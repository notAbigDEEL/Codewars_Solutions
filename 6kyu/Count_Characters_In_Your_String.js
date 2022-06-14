/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

function count(string) {
  let result = {};

  if (!string) {
    return {};
  }

  for (const ch of string) {
    if (result.hasOwnProperty(ch)) {
      result[ch] += 1;
    } else {
      result[ch] = 1;
    }
  }
  return result;
}

console.log(count("aba"), { a: 2, b: 1 });
console.log(count("caabbu"), { a: 2, b: 2, c: 1, u: 1 });
