// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
// function positiveSum(arr) {
//   const arai = arr.filter(m => m > 0)
//   console.log(arai)
//   if (arai.length < 1){
//     return 0
//   }else{
//     return arai.reduce((acc,cv) => acc + cv , 0);
//   }
// }

const positiveSum = arr => arr.filter(m => m > 0).reduce((acc,cv) => acc + cv, 0);

console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
console.log(positiveSum([]));
console.log(positiveSum([-1,2,3,4,-5]));