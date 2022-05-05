/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

 */

// function longest(s1, s2) {
//     return [...new Set(s1+s2)].sort().join("")
//   }

function longest(s1, s2) {
  let strArr = (s1 + s2).split("");

  return strArr
    .filter((item, index, arr) => {
      return index === arr.lastIndexOf(item);
    })
    .sort()
    .join("");
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"), "abcdefklmopqwxy");
console.log(
  longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"),
  "abcdefghijklmnopqrstuvwxyz"
);
