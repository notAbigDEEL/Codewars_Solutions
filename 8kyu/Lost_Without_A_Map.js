/* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
 */

function maps(x) {
  return x.map((n) => 2 * n);
}

console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([3, 6, 1, 0]), [6, 12, 2, 0]);
