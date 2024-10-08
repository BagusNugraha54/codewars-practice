/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
function moveZeros(arr) {
    const a = arr.filter(el => el !== 0);
    const b = arr.filter(el => el === 0);
    return [...a, ...b];
    // return a.concate(b);
};

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));


//assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);