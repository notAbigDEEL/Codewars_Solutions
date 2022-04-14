/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

function find_average(array) {
  return array.length === 0 ? 0 : array.reduce((a, b) => a + b) / array.length;
}

console.log(find_average([1, 2, 3, 4, 5]), 3);
console.log(find_average([1, 2, 3, 4, 5, 6, 7]), 4);
console.log(find_average([1, 2, 3, 4, 5, 6]), 3.5);
