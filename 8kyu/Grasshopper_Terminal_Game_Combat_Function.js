/* Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
 */

function combat(health, damage) {
  if (health <= damage) {
    return 0;
  } else {
    return health - damage;
  }
}

console.log(combat(100, 50), 50);
console.log(combat(100, 150), 0);
console.log(combat(10, 5), 5);
