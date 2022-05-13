/*Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0

Examples

'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

 */

function sameCase(a, b){
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(alphabet.includes(a) === false || alphabet.includes(b) === false){
      return -1
    }else if((a === a.toLowerCase()) && (b === b.toLowerCase())){
        return 1
      }else if ((a === a.toUpperCase()) && (b === b.toUpperCase())){
        return 1
      }else{
        return 0
      }
  }

    console.log(sameCase('a', 'g'), 1);
    console.log(sameCase('A', 'C'), 1);
    console.log(sameCase('b', 'G'), 0);
    console.log(sameCase('B', 'g'), 0);
    console.log(sameCase('0', '?'), -1); 
    console.log(sameCase('', ''), -1);