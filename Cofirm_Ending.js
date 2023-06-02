//Cofirm_Ending.js
/*
:: Directions ::
//write a fucntion that takes a string and a character 
//if the strings and with the character the 
//return true else restuen false 

Examples :
confirm_ending('hello' , 'o') => return true 
confirm_ending('buddy' , 'x') = return false 
*/
function confirm_ending(str ,ch){
    let reversed = str.split("").reverse();
    return reversed[0] === ch;
}
console.log(confirm_ending('buddy' , 'y'))