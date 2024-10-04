/*
Write a function that takes in a string of one or more words, and returns the same string, 
but with all words that have five or more letters reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:
*/

function spinWords(string){
    const arr = string.split(' ').map(el => el.split(''));
    for (let i =0; i < arr.length; i++){
        if (arr[i].length > 4){
        arr[i].reverse();
        }
    }
    return arr.map(el => el.join('')).join(' ');
}

/*
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
*/
/*
function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}
*/

const a = "This is a test";
const b = "This is another test";
const c = "You are almost to the last test";
const d = "Just kidding there is still one more";
const e = "Seriously this is the last one";
const f = "Hey fellow warriors";

console.log(spinWords(f));