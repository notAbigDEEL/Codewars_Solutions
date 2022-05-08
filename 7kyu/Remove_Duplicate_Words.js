/*Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

 */

function removeDuplicateWords (s) {
    let sArr = s.split(" ")
    let result = []
    
    return sArr.filter((x,i, arr) => arr.indexOf(x) === i).join(" ")
    
  }

    console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma delta'), 'alpha beta gamma delta');
    console.log(removeDuplicateWords('alpha beta beta gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');