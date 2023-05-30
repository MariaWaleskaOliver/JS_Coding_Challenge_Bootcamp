/*
Title : Even or Odd 
>>Write a program that will check the give number is even or odd 
## Test ##

input : 3 -> output:odd
input : 4 -> output:even
*/ 

function checkEvenOdd(number){
if(number%2==0){
    return "Even";
}if(number%2==1){
    return "Odd";
}
}
console.log(checkEvenOdd(4));