/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 */

function removeExclamationMarks(s) {
    let result = ''
    for(let i = 0; i < s.length; i++){
      if(s[i] === '!'){
          continue
      }
      else{
        result += s[i]
      }
    }
    return result
  }

    console.log(removeExclamationMarks("Hello World!"), "Hello World");
    console.log(removeExclamationMarks("Hel!lo! World!!!"), "Hello World");