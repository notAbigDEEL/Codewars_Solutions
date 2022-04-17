/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway

 */

function noBoringZeros(n) {
    let str = n.toString();
    let arr = str.split('');
    let last = arr[arr.length - 1];
    if (last === '0') {
        arr.pop();
        return +noBoringZeros(arr.join(''));
    } else {
        return +n;
    }
 }


console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(960000), 96);
console.log(noBoringZeros(1050), 105);