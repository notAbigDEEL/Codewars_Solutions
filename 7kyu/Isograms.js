/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

 */

function isIsogram(str) {
  str = str.toLowerCase();
  let bool = [];
  if (str.length === 0) {
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    bool.push(str.indexOf(str[i]) === str.lastIndexOf(str[i]));
  }
  if (bool.includes(false)) {
    return false;
  } else {
    return true;
  }
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("aba"), false);
console.log(isIsogram("moOse"), false);
console.log(isIsogram(""), true);