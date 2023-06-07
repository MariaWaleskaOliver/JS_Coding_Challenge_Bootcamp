//Lowest_sum_two_arrays.js
/*
Coding Challenge : Lowest sum of two array items
::Direction::
//write a function that takes an array 
//return Lowest sum of two elements of the array
Examples:
Lowest_sum([4,3,9,8,2,1]) => return 3
Lowest_sum([100,400,140,345,145]) =>return 240
*/ 
function Lowest_sum(arr){
    let asc_arr = arr.sort((a,b) =>{
        return a - b;
    });
    return asc_arr[0] + asc_arr[1];
    //console.log(asc_arr);
}
console.log(Lowest_sum([4,3,9,8,2,1]));