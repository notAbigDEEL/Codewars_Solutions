/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

 */

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === "r") {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

console.log(areYouPlayingBanjo("Rikke"), "Rikke plays banjo");
console.log(areYouPlayingBanjo("Daniel"), "Daniel does not play banjo");
console.log(areYouPlayingBanjo("Martin"), "Martin does not play banjo");
