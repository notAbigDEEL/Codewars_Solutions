/* Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

 */

var greet = function (name) {
  return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
};

console.log(greet("riley"), "Hello Riley!");
console.log(greet("jack"), "Hello Jack!");
console.log(greet("JACK"), "Hello Jack!");
