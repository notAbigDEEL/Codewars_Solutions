/*Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)

should return:

'A'

For ASCII table, you can refer to http://www.asciitable.com/
 */

function getChar(c) {
  return String.fromCharCode(c);
}

console.log(getChar(65), "A");
console.log(getChar(97), "a");
console.log(getChar(66), "B");