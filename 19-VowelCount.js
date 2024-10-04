/**
 * Return the number (count) of vowels in the given string. 
 * We will consider a, e, i, o, u as vowels for this Kata (but not y). 
 * The input string will only consist of lower case letters and/or spaces.
 */

// function getCount(str) {
//     const arrStr = str.split('').map(el => el).filter(el => el === 'a' || el === 'i' || el === 'u' || el === 'e' || el === 'o');
//     //console.log(arrStr)
//     return arrStr.length;
// }

/*
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}
*/

/**
 * 
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
 */


function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}


console.log(getCount("abracadabra"));