/*Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

 */

function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(0), 1);
console.log(factorial(3), 6);
console.log(factorial(4), 24);
