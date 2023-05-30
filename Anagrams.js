/*
    Title: Anagrams
    >> Write down a program that will check two provided string anagrams of 
    >> each other or not
    // One string is anagram of another if it uses the same characters in the
    // Same quantity only consider characters(letter+number) not spaces and 
    // punctuations. It's case insensitive.
    ## Test ##
    input: str1='rail safety'    str2='fairy tales'  output: true
    input: str1='Rail! Safety!'  str2='fairy tales'  output: true
    input: str1='hello there'    str2="hey there"    output: false
*/
//First way to solve it 
// function  build_obj(str){
//     let obj ={};
//     for(let ch of str){
//         if(obj[ch]){
//             obj[ch] +=1;
//         }else{
//             obj[ch] = 1;
//         }
//     }
//     return obj;
// }

// function anagrams(frase1, frase2){
//    let s1 = frase1.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
//    let s2 = frase2.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
//    let o1 = build_obj(s1);
//    let o2 = build_obj(s2);
//    if(Object.keys(o1).length != Object.keys(o2).length)
//    {
//     return false;
//    }
//    for(let p in o1){
//      if(o1[p] != o2[p]){
//       return false;
//      }
//    }
//    return true;
// }


// Second way to solve it 

function anagram(str1, str2){
    let s1=  str1.replace(/[^a-zA-Z0-9]/g,'').toLowerCase().split("").sort().join("");
    let s2=  str2.replace(/[^a-zA-Z0-9]/g,'').toLowerCase().split("").sort().join("");
return s1 == s2;
}
console.log(anagram("Rail! Safety!" ,"fairy tales" ));