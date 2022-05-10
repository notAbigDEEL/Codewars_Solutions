/* You received an array with two strings. Create a function that will return their product as a string. E.g.

arrMultiply(['9','6']) should return '54'

 */

function arrMultiply(arr) {
  return arr
    .map((x) => +x)
    .reduce((accum, curr) => accum * curr)
    .toString();
}

console.log(arrMultiply(["9", "6"]), "54");
console.log(arrMultiply(["9", "6", "3"]), "162");
console.log(arrMultiply(["9", "6", "3", "2"]), "324");
