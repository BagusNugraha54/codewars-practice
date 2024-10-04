/*
This time we want to write calculations using functions and get the results.
Requirements:
There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
*/

const zero = callback => callback ? callback(0) : 0; 

const one = callback => callback ? callback(1) : 1; 

const two = callback => callback ? callback(2) : 2; 

const three = callback => callback ? callback(3) : 3; 

const four = callback => callback ? callback(4) : 4; 

const five = callback => callback ? callback(5) : 5; 

const six = callback => callback ? callback(6) : 6; 

const seven = callback => callback ? callback(7) : 7; 

const eight = callback => callback ? callback(8) : 8; 

const nine = callback => callback ? callback(9) : 9; 





const plus= a => b => a + b ;

const minus= a => b => b - a ;
    
const times= a => b => a * b ;
//const dividedBy= a => b => Math.round(b / a) ;
const dividedBy= a => b => Math.floor(b / a) ;

// const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, idx) => fn => fn ? fn(idx) : idx);
// const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(val => new Function(`b`, `return a => a ${val} b ^ 0`));


console.log(seven(times    (five ())));
console.log(zero (times    (six ())));
console.log(four (plus     (nine ())));
console.log(eight(minus    (three())));
console.log(six  (dividedBy(two  ())));
console.log(eight(dividedBy(three())));
console.log(eight(dividedBy(five())));