//Min_Max_Tree_Num.js
/*Find min , max of tree numbers 
>>Write down a program that will find minimun and maximum of three 
>>numbers using ternary operator 
## Test ##
input: 1 2 3 output: min=1 max=3
input: 5 2 8 output: min=2 max=8
*/ 
function find_min_max_tree_numbers( num1 ,num2, num3){
let min = num1 < num2 && num1 < num3 ? num1 : num2 < num1 && num2 < num3 ? num2 : num3;
let max = num1 > num2 && num1 > num3 ? num1 : num2 > num1 && num2 > num3 ? num2 : num3;
console.log(" min :" , min , "max :", max)
}

find_min_max_tree_numbers(1,2,3);