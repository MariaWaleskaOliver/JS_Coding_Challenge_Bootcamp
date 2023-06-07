//Sorting_Array.js
/*
Coding Challenge: Sorting Array
::Direction::
//write a function that takes an array 
//return ascesding of the array 
Examples:
asc([1,4,2,3])=>[1,2,3,4]
asc([100,90,20,15,43,23]) => [15,20,23,43,90,100]
//practice
desc([1,4,2,3]) => [4,3,2,1]
desc([100,90,20,15,43,23]) =>[100,-90,43,23,20,15]
*/

function sortingArrayAsc(arr){
return arr.sort((a,b) =>{
    return a - b;
});
}
//console.log(sortingArrayAsc([1,4,2,3]));
function sortingArrayDesc(arr){
    return arr.sort((a,b)=>{
        return b - a;
    });
}
console.log(sortingArrayDesc([1,4,2,3]));