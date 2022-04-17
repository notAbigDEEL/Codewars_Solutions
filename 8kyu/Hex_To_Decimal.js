/* Complete the function which converts hex number (given as a string) to a decimal number.
 */

function hexToDec(hexString){
  return parseInt(hexString, 16);
}

console.log(hexToDec("10"), 16);
console.log(hexToDec("1c"), 28);
console.log(hexToDec("0"), 0);
console.log(hexToDec("ffff"), 65535);