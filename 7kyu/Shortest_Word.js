/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

 */

// function findShort(s) {
//   let sArr = s.split(" ");
//   let result = sArr.sort((a, b) => a.length - b.length);
//   return result[0].length;
// }

function findShort(s) {
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
}

console.log(
  findShort("bitcoin take over the world maybe who knows perhaps"),
  3
);
console.log(findShort("turns random test cases easier writing basic ones"), 4);
console.log(findShort("astounding something nothing here"), 4);
