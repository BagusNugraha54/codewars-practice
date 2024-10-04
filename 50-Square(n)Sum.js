/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9  
*/
const squareSum = numbers => numbers.length < 1 ? 0 : numbers.map(el=>el**2).reduce((acc,cv)=>acc+cv);

/*
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}
*/

console.log(squareSum([]));

// assert.strictEqual(squareSum([1,2]), 5);
// assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
// assert.strictEqual(squareSum([]), 0);