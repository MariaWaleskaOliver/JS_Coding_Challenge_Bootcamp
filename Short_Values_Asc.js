//Short_Values_Asc.js

/*Title : Sort values of three variables in ASC Order 
>> Write down a program that will take three number as input and 
>>will sort them in ASC order 
## Test ##
input: n1=5 n2=8 n3=3 output: n1=3 n2=5 n3=8 
input: n1=5 n2=2 n3=9 output: n1=1 n2=5 n3=9 

*/

let n1 = 5;
let n2 = 8;
let n3 = 9;

let min = n1<n2&&n1<n3 ? n1 : n2<n1&&n2<n3 ? n2:n3;
let max = n1>n2&&n1>n3 ? n1 : n2>n1&&n2>n3 ? n2 :n3;
let sc = n1>n2&&n1>n3 ? n2>n3? n2:n3 : n2>n1&&n2>n3 ? n1>n3?n1:n3: n1>n2? n1:n2; 
n1= min;
n2= sc;
n3= max;
console.log("n1 : ", n1, "n2=", n2 , "n3=" , n3)