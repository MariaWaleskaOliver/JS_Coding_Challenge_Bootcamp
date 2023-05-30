//Find_Second_Largest_of_Tree.js
/*Title : Find seconde Lasgest of three numbers 
>>Write down a program that will find asecnond lasrgest of three 
>numbers using ternary operator 
## Teste ##
input : 1 2 3 output: 2
input : 5 2 8 output: 5
*/ 

function find_Second_Largest_of_Three( num1 , num2, num3){
let sc = num1>num2&&num1>num3 ? num2>num3? num2:num3 : num2>num1&&num2>num3? num1>num3?num1:num3 : 
num1>num2?num1:num2;
console.log(sc);  
}
find_Second_Largest_of_Three( 5,2,8);