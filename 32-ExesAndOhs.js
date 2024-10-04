/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
function XO(str) {
    const arr = str.toLowerCase().split('').filter(el => 'xo'.includes(el));
    //console.log(arr.length)
    if (arr.length === 0){
        return true
    }else{
        const cx = arr.filter(el => 'x'.includes(el)).length;
        const co = arr.filter(el => 'o'.includes(el)).length;
        return cx === co ? true : false;
    }
}
/*
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
*/
/*
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
*/
console.log(XO('abcxxoOo'));