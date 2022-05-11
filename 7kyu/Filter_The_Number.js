/*Filter the number

Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
Task

Your task is to return a number from a string.
Details

You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

 */

var FilterString = function (value) {
  let valArr = value.split("");
  let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = "";

  for (let i = 0; i < valArr.length; i++) {
    if (num.includes(valArr[i])) {
      result += valArr[i];
    }
  }
  return +result;
};

console.log(FilterString("1a2b3c4d5e"), "12345");
console.log(FilterString("1a2b3c4d5e1"), "12345");
console.log(FilterString("1a2b3c4d5e1a"), "12345");
