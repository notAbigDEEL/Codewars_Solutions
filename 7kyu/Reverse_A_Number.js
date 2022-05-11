/* Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
Examples

 123 ->  321
-456 -> -654
1000 ->    1

 */


function reverseNumber(n) {
    let num = n.toString()
    if(n > 0){
      return Number(num.split("").reverse().join(""))
    }else if (n === 0){
      return 0
    }else{
      let result = num.slice(1)
      return Number(result.split("").reverse().join("")) * -1
    }
  }

    console.log(reverseNumber(123), 321);
    console.log(reverseNumber(-456), -654);
    console.log(reverseNumber(1000), 1);
    console.log(reverseNumber(0), 0);