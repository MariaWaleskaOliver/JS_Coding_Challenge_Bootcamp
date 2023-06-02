//Word_Counter.js
/* 
Coding Challenge: Word Couter 
:: Direction ::
//write a function that takes string
//return the number of word exists in the strings 
:Examples:
count('The quick brown fox jump over tyhe Lazy dog')=> return 9
count ('He is quickest man in the world ! ') => return 8 
*/

function couter(str){

    let arr = str.split(" "); 
   // let result = [];
    return arr.length;
    /*using for loop 
    for (let el of arr){
       if(/[a-zA-Z0-9]+/.test(el)){
        result.push(el)
       } 
    }
return result.length;*/
}
let frase = 'The quick brown fox jump over tyhe Lazy dog';
console.log(couter(frase));