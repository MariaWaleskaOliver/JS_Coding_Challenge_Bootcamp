/*
Title : find min, max of two numbers 
>>Write down a program that will take two numbers as input and 
>>find min and max usinh ternary operator  
## Test ##
input: 1 2 , output: Min =1 Max= 2  
*/ 

function MaxMin(n1, n2){
    let min = n1 > n2  ? n2 : n1;
    let max = n1 > n2 ? n1: n2; 
    console.log("min=" , min, "max=", max);
}

MaxMin( 1, 2);