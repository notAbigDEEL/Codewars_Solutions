/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
 */

// function fakeBin(x){
//     let result = ''
//     let strArr = x.split('')
//     for(let i=0; i < strArr.length; i++){
//       if(strArr[i] < 5){
//         result += 0
//       }else{
//         result += 1
//       }
//     }
//     return result
// }

// function fakeBin(x) {
//   let xToArray = x.split("");
//   const y = xToArray.map((a) => (a > 4 ? (a = 1) : (a = 0)));
//   return y.join("");
// }

function fakeBin(x) {
  return x
    .split("")
    .map((a) => (a < 5 ? 0 : 1))
    .join("");
}

console.log(fakeBin("45385593107843568"), "01011110001100111");
console.log(fakeBin("509321967506747"), "101000111101101");
console.log(
  fakeBin("366058562030849490134388085"),
  "011011110000101010000011011"
);
