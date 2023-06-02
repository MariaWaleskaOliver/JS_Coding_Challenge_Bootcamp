//Summing_array_Elements.js
/*
Coding Challenge: Summing Array Elements 
:: Direction ::
//write a fucntion that takes an array 
// return sum of all the elements 
:Examples :
sumArrEl([1,2,3,4])=> return 10 
sumArrEl([2,4,5,6])=> return 17 
*/

//using for 
// function sumArrEl(arr){
//     let result = 0;
//     for(let el of arr){
//         result += el;
//     }
//     return result;
// }

//using foreach
// function sumArrEl(arr){
//     let result = 0;
//     arr.forEach((element) => {
//         result+= element;
//     });
//     return result;
// }

//Solving using reduce 
function sumArrEl(arr){
   return  arr.reduce((sum,curr) =>{
    return sum + curr;
   }, 0)
}

let arr = [2,4,5,6];
console.log(sumArrEl(arr));