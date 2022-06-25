/*
screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

 */

function maskify(cc) {
  let ccArr = [];
  for (let i = 0; i < cc.length - 4; i++) {
    ccArr.push("#");
  }
  for (let i = cc.length - 4; i < cc.length; i++) {
    ccArr.push(cc[i]);
  }
  return ccArr.join("");
}

console.log(maskify("4556364607935616"), "############5616");
console.log(maskify("64607935616"), "#######5616");
console.log(maskify("1"), "1");
