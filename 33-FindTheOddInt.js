/*
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// function findOdd(A) {
//     let count = 0;
//     let arr = A.sort((a, b) => a - b);
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//         console.log(arr[i])
//         console.log(arr[j])
//         if (arr[i] === arr[j]) {
//           count++;
//         }
//       }
//       if (count % 2 !== 0) {
//         return arr[i];
//       }
//     }
//   }


const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([1,3,3,4,1]));






// Our array of values
const myArray = [1, 2, 3, 1, 2, 4, 5, 1, 2];
const myArray1 = ['a', 'b', 'a', 'c', 'b', 'a', 'd', 'f', 1];

// The magical counting process
const countDuplicates = (arr) => {
  // Let's use a JavaScript object to keep track of counts
  const counts = {};

  // Loop through each element in the array
  arr.forEach((value) => {
    // If the value is encountered for the first time, set the count to 1
    if (!counts[value]) {
      counts[value] = 1;
    } else {
      // If the value has been seen before, increment the count
      counts[value]++;
    }
  });

  // Voilà! The counts object now holds the frequency of each value
  return counts;
};

// Let's see the result
const result = countDuplicates(myArray1);
console.log(result);