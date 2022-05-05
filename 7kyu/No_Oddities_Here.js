/* Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

 */

function noOdds(values) {
  return values.filter((x) => x % 2 === 0);
}

console.log(noOdds([1, 2, 3, 4, 5]), [2, 4]);
console.log(noOdds([4, 7, 2, 6, 9, 10]), [4, 2, 6, 10]);
console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [2, 4, 6, 8, 10]);