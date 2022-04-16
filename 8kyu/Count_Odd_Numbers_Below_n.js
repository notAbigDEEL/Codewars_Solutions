/* Given a number n, return the number of positive odd numbers below n, EASY!
Examples (Input -> Output)

* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

 */

// function oddCount(n) {
//   let result = 0;
//   for (let i = 1; i < n; i++) {
//     if (i % 2 === 1) {
//       result++;
//     }
//   }
//   return result;
// }

function oddCount(n) {
  const numCount = Math.floor(n / 2);
  return numCount;
}

console.log(oddCount(7), 3);
console.log(oddCount(15), 7);
console.log(oddCount(10), 5);
console.log(oddCount(20), 10);
console.log(oddCount(0), 0);
