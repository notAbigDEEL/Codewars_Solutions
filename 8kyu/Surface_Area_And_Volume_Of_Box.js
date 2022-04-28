/*Write a function that returns the total surface area and volume of a box as an array: [area, volume]
 
*/

// function getSize(width, height, depth) {
//     let tsa = height * width * 2 + width * depth * 2 + depth * height * 2;
//     let volume = width * height * depth;
//     let result = [tsa, volume];
//     return result;
// }

function getSize(width, height, depth) {
  return [
    width * height * 2 + width * depth * 2 + depth * height * 2,
    width * height * depth,
  ];
}

console.log(getSize(1, 2, 3), [18, 6]);
console.log(getSize(2, 3, 4), [43, 24]);
console.log(getSize(5, 5, 5), [98, 125]);
