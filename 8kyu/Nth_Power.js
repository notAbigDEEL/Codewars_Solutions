/* You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

    array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
    array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

 */

function index(array, n) {
  if (n < 0 || n >= array.length) return -1;
  return array[n] ** n;
}

console.log(index([1, 2, 3, 4], 2), 9);
console.log(index([1, 2, 3], 3), -1);
console.log(index([100], 0), 1);
