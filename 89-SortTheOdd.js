/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 
*/
function sortArray(array) {
    const odd = array.filter(el => el % 2 !== 0).sort((a,b) => a-b);
    //console.log(odd)
    let i = 0;
    for (let el = 0; el < array.length; el++){
        if ( array[el]%2 !== 0){
            array[el] = odd[i];
            i++;
        }

    }
    return array;
};

/*
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}
*/

// console.log(sortArray([5, 3, 2, 8, 1, 4]));
 console.log(sortArray([ -17, -29, 42, 30, 20, 40, -35, 13, 6, -24, 49, 9 ]));
console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]));


// assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
// assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
// assert.deepEqual(sortArray([]),[]);