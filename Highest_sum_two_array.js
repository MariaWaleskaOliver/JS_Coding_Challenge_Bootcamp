//Highest_sum_two_array.js
/*
Coding Challenge: Highest sum of two array elements
::Directions::
//write a function that takes an array
// return the highest sum of two array elements 
:Examples:
highest_sum([1,3,5,2])=> return 8
 highest_sum([100,300,200,600,90])=> return 900
*/
function Highest_sum(arr){
    let des_arr = arr.sort((a,b) =>{
        return b-a;
    });
    return des_arr[0] + des_arr[1];
    //console.log(asc_arr);
}
console.log(Highest_sum([1,3,5,2]));
