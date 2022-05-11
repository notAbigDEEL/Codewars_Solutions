/* Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you shoud return:

["-------------", "Unicorn"]

 */

function bald(x) {
  console.log(x.length);
  let count = 0;
  let dash = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "/") {
      count++;
    }
  }

  for (let i = 0; i < x.length; i++) {
    dash += "-";
  }

  console.log(dash);

  if (count === 0) {
    return [dash, "Clean!"];
  } else if (count === 1) {
    return [dash, "Unicorn!"];
  } else if (count === 2) {
    return [dash, "Homer!"];
  } else if (count > 2 && count < 6) {
    return [dash, "Careless!"];
  } else {
    return [dash, "Hobo!"];
  }
}

console.log(bald("------/------"), ["-------------", "Unicorn"]);
console.log(bald("------/--//--"), ["-------------", "Careless!"]);
