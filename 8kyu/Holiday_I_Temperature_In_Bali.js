/*So it turns out the weather in Indonesia is beautiful... but also far too hot most of the time.

Given two variables: heat (0 - 50 degrees centigrade) and humidity (scored from 0.0 - 1.0), your job is to test whether the weather is bareable (according to my personal preferences :D)

Rules for my personal preferences
i. if humidity > 0.5 or the heat >= 36, it's unbearable return false
ii. if 25 < heat < 36 and the humidity > 0.4, also unbearable return false
iii. otherwise, it's sunbathing time :), return true

Examples

> heat = 36, humdity = 0.3 -> return false
> heat = 36, humdity = 0.5 -> return false
> heat = 10, humdity = 0.51 -> return false
-> triggered rule 1

> heat = 27, humdity = 0.5 -> return false
-> triggered rule 2

> heat = 27, humdity = 0.4 -> return true
> heat = 25, humdity = 0.5 -> return true
> heat = 33, humdity = 0.38 -> return true
-> triggered rule 3

 */

function bareable(heat, humidity){
    if(heat >= 36 || humidity > 0.5){
      return false
    }else if(heat > 25 && heat < 36 && humidity> 0.4){
      return false
    }else{
      return true
    }
}

console.log(bareable(36, 0.3), false);
console.log(bareable(38, 0.6), true);
console.log(bareable(25, 0.5), true);