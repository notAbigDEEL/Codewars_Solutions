/*  Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7

Do not modify the input list.

 */

function longest(words) {
    let wordsArr = (words.map( x => x.length))
    return (Math.max(...wordsArr))
  }

    console.log(longest(['simple', 'is', 'better', 'than', 'complex']), 7)
    console.log(longest(['a', 'ab', 'abc', 'abcd', 'abcde']), 5)