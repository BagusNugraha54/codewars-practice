/*
Write a function that accepts an integer n and a string s as parameters, 
and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

const repeatStr = (n, s) => s.repeat(n);

/*
function repeatStr (n, s) {
let str="";
for(let i=0; i < n; i++)
  str+=s;
  return str;
}
*/

console.log(repeatStr(2, "ha "));
// assert.strictEqual(repeatStr(3, "*"), "***");
// assert.strictEqual(repeatStr(5, "#"), "#####");
// assert.strictEqual(repeatStr(2, "ha "), "ha ha ");