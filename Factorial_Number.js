//Factorial_Number.js
/*
Title : Factorial of a number 
>>Write down a program that will find factorial of a number 
## Test ##
input : 3 output : 6
input : 4 output : 4 // 1*2*3*4 =24
*/

//iterative approach 
// function factorial (number){
//  let fact = 1;   
//  for(let i = 1; i <= number; i++){
//    fact *= i;
//     }
//     return fact;
// }
// console.log(factorial(4));

// recursive approach 
function factorial(number){
    if(number == 1){
        return 1;
    }else{
        return number * factorial(number -1);
    }
}
console.log(factorial(4))