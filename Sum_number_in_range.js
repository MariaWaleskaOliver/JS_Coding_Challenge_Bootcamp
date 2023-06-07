//Sum_number_in_range.js
/*
Coding Challenge : Sum number in a range 
:: Directions ::
//write a function that takes renge of a number " 9-11"
// return the sum of number in between of the range 
:Examples:
sumInRange("1-4") => return 10
sumInRange("10-20") => return 165
*/
function sumNumbers(range){
   let arr = range.split('-');
   let result = 0;
    for(let i = arr[0]; i <= arr[1]; i++){
        result += parseInt(i);
    }
   return result;
}
console.log("result is" , sumNumbers("10-20"));