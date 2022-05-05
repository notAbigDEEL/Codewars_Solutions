/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

 */

var number = function (array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(`${i + 1}: ${array[i]}`);
  }
  return result;
};

var number = function (array) {
  return array.map((el, i) => {
    return `${i + 1}: ${el}`;
  });
};

console.log(number([]), []);
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"]);
console.log(number(["b", "c", "d", "e"]), ["1: b", "2: c", "3: d", "4: e"]);
