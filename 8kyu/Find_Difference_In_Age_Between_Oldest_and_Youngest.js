/* At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

 */

function differenceInAges(ages){
    let result = []
    let sorted = ages.sort((a,b)=>a-b)
    let difference = sorted[sorted.length-1] - sorted[0]
    
    result.push(sorted[0])
    result.push(sorted[sorted.length-1])
    result.push(difference)
  
    return result
}


console.log(differenceInAges([82, 15, 4, 32, 9, 21]), [4, 32, 26])
console.log(differenceInAges([5, 3, 2, 1, 4]), [1, 5, 4])
console.log(differenceInAges([1, 2, 3, 4, 5]), [1, 5, 4])