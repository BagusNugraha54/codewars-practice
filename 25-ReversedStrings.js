/*
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// function solution(str){
//     const s = [...str]
//     return s.toReversed().join('')
// }

const solution = str => [...str].reverse().join('');

console.log(solution('world'));
console.log(solution('hello'));
console.log(solution(''));
console.log(solution('h'));


const arr = [1,1,1,2,3,4,5];

const sett = [ ...new Set(arr)]
console.log(sett)