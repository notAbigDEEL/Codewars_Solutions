/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

 */

function XO(str) {
    let xCount = 0
    let oCount = 0
    str = str.toLowerCase()
    
    for(let i = 0; i < str.length; i++){
      if(str[i] === 'x'){
        xCount++
      }else if (str[i] === 'o'){
        oCount++
      }
    }
  
  return xCount === oCount
  }
  

    console.log(XO("ooxx"), true)
    console.log(XO("xooxx"), false)
    console.log(XO("ooxXm"), true)
    console.log(XO("zpzpzpp"), true)