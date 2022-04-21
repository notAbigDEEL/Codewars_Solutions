/*Complete the function which converts a binary number (given as a string) to a decimal number.
 */

function binToDec(bin) {
  return parseInt(bin, 2);
}

console.log(binToDec('1100'), 12);
console.log(binToDec('1010101'), 85);
console.log(binToDec('1001001'), 73);