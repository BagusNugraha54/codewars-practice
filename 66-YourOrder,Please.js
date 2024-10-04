/*
Your task is to sort a given string. Each word in the string will contain a single number. 
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. 
The words in the input String will only contain valid consecutive numbers.

Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

//hanya works di vscode ini, tapi error di codewars
// function order(words){
//     const arr = words.split(' ').map(el => el.match(/[0-9]/)).sort().map(el => el['input']).join(' ');
//     return arr;
// };

// function order(words){
//     const arr = words.split(' ');
//     for (let i = 0; i < arr.length; i++){
//         arr[i] = arr[i].split('');
//     }
//     return arr;
// };


function order(words){
    if (words === ''){
        return words
    }else{
        const arrNumber = words.split(' ').map(el => Number(el.match(/[0-9]/)[0]));
        const arrStr = words.split(' ');
        const final = [];
        console.log(arrNumber)
        for (let i = 1; i <= arrStr.length; i++){
            final.push(arrStr[arrNumber.indexOf(i)])
        } 
        return final.join(' ');  
    }    
};   

/*
function order(words) {
  return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
}
*/

console.log(order("4of Fo1r pe7ople g3ood th5e the2 6black"));


// function chunkArrayLoop(array, size) {
//     let result = [];
//     for (let i = 0; i < array.length; i += size) {
//         let chunk = [];
//         for (let j = i; j < i + size && j < array.length; j++) {
//             chunk.push(array[j]);
//         }
//         result.push(chunk);
//     }
//     return result;
// }

// console.log(chunkArrayLoop([1, 2, 3, 4, 5, 6], 3));


function order1(words){
    if (words === ''){
        return words
    }else{
        const arrNumber = words.split(' ').map(el => Number(el.match(/[0-9]/)[0]));
        const arrStr = words.split(' ');
        const semiFinal = {};
        const finalStr = [];
        arrNumber.forEach(el => {
            semiFinal[el] = arrNumber.indexOf(el)
        })
        console.log(semiFinal)
        for (let i = 1; i <= arrStr.length; i++){
            finalStr.push(arrStr[semiFinal[i]]);
        }
        return finalStr.join(' ');
    }    
};   


console.log(order1("4of Fo1r pe7ople g3ood th5e the2 6black"));