/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

 */

function between(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}

console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(4, 9), [4, 5, 6, 7, 8, 9]);
console.log(between(10, 20), [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
