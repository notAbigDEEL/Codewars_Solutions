/* Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
 */

function reverse(str){
    str = str.trim()
    let strArr = str.split(" ")
    let result = []
    
    for(let i = 0; i < strArr.length; i++){
      if(i % 2 !== 0){
        result.push(strArr[i].split("").reverse().join(""))
      }else{
        result.push(strArr[i])
      }
    }
    return result.join(" ")
  }

    console.log(reverse("  hello world!  "), "hello !dlrow");
    console.log(reverse("  hello world! You are the best  "), "hello !dlrow You era the tseb");