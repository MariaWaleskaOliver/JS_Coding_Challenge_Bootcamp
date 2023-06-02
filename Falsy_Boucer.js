//Falsy_Boucer.js
/*
Coding Challenge :Flase Boucer 
::Direction ::
//write a function that takes an array 
// remove all the false elements from the array 
// return the array

:Examples:
boucer([1,2,3, '', 0 , false, null, undefined]) = [1, 2, 3]
*/
/*
//--------One way to solve is --------- 
function boucer(arr)
{
    let result = [];
    for(let el of arr){
        if(el){
            result.push(el)
        }
    }
    return result;
}*/

//--------Second way to solve is --------- 
function boucer(arr){
    return arr.filter((el) => {
      return el; 
    })
}

console.log(boucer([1,2,3, '', 0 , false, null, undefined]));