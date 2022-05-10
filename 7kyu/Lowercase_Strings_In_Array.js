/* Create a function to lowercase all strings in an array. Non-string items should remain unchanged.
Example

arrayLowerCase(['Red', 'Green']) == ['red', 'green']
arrayLowerCase([1, 'Green']) == [1, 'green']

 */

function arrayLowerCase(arr) {

    let result = []
    for(let i = 0; i < arr.length; i++){
      if(typeof arr[i] === "string"){
        result.push(arr[i].toLowerCase())
      }else{
        result.push(arr[i])
      }
    }
    
    return result
  }

    console.log(arrayLowerCase(['Red', 'Green']), ['red', 'green']);
    console.log(arrayLowerCase([1, 'Green']), [1, 'green']);