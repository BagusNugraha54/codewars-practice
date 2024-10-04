/*
Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum(a, b){
   const arr = [];
   for (let i = Math.min(a,b); i <= Math.max(a,b); i++){
        arr.push(i);
   }
   return arr.reduce((acc,cv)=>acc+cv);
};

/*
function GetSum(a,b){
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}
*/
console.log(getSum(0,-1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
console.log(getSum(-1, 2));

// assert.strictEqual(getSum(0,-1), -1);
// assert.strictEqual(getSum(0, 1),  1);
// assert.strictEqual(getSum(2, 2),  2);