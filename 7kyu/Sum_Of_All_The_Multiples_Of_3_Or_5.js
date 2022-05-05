/* Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

 */

function findSum(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((accum, curr) => accum + curr);
}

console.log(findSum(5), 8);
console.log(findSum(10), 33);
console.log(findSum(20), 98);
