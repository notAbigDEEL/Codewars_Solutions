/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

 */

function persistence(num) {
  let count = 0;
  let numArr = num
    .toString()
    .split("")
    .map((x) => +x);

  while (numArr.length > 1)
    if (numArr.length === 1) {
      return 0;
    } else {
      for (let i = 0; i < numArr.length; i++) {
        numArr = numArr
          .reduce((accum, curr) => accum * curr)
          .toString()
          .split("")
          .map((x) => +x);
        count++;
      }
    }
  return count;
}

console.log(persistence(39), 3);
console.log(persistence(999), 4);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
