/* Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.

 */

function isSortedAndHow(array) {
    let ascArr = array.slice()
    let dscArr = array.slice()
    let ascSort = ascArr.sort((a,b) => a - b)
    let dscSort = dscArr.sort((a,b) => b - a)
    
    if(array.join("") === ascSort.join("")){
      return "yes, ascending"
    }else if (array.join("") === dscSort.join("")){
      return "yes, descending"
    }else{
      return "no"
    }
  }

    console.log(isSortedAndHow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "yes, ascending");
    console.log(isSortedAndHow([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), "yes, descending");
    console.log(isSortedAndHow([1, 2, 3, 4, 5, 6, 10, 9, 8, 7]), "no");