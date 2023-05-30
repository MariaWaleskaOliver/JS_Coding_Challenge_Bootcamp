/*Coding Challenge: Summing Array Elements 
::Directions::
Write a function that takes an array 
retun sum of all elements 
Exemple :
sumArrel([1,2,3,4]) => return 10
sumArrEl([2,4,5,6])=> return 17
*/ 

function sumArrEl(arr){
let result =0; 

// for(let i=0; i < arr.length; i++ ){
// result= result+ arr[i];
// }
for (let el of arr){
    result+= el;
}
return result;
}

console.log(sumArrEl([1,2,3,4]));
console.log(sumArrEl([2,4,5,6]));




