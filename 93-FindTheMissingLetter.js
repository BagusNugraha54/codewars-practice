/*
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. 
The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
*/
function findMissingLetter(array){
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  const arr = [...array].map(el => el.toLowerCase());
  const awal = arr.slice(0,1);
  const akhir = arr.slice(array.length - 1);
  const slais = alphabet.slice(alphabet.indexOf(awal[0]), alphabet.indexOf(akhir[0])+1);
  const [miss] = slais.filter(el => !arr.includes(el));

  const isLowerCase = str => str === str.toLowerCase();

  if (array.every(isLowerCase)){
    return miss;
  }else{
    return miss.toUpperCase()
  }
};
/*
function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}
*/
/*
const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};
*/

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['o','q','r','s']));
console.log(findMissingLetter(['O','Q','R','S']));