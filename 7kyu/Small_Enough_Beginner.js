/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

 */

function smallEnough(a, limit) {
  let aFilter = a.filter((x) => x <= limit);
  return a.length > 0 && aFilter.length === a.length;
}

console.log(smallEnough([1, 2, 3, 4, 5], 3), true);
console.log(smallEnough([1, 2, 5], 4), false);
console.log(smallEnough([1, 2, 3, 4, 5], 5), true);
