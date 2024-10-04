/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
*/

// function findUniq(arr) {
//     const duplicatArr = [...new Set(arr.filter((el, i, ar) => i !== ar.indexOf(el)))];
//     //console.log(duplicatArr)
//     const [result] = arr.filter(el => !duplicatArr.includes(el));
//     return result
// };

function findUniq(arr){
    const obj = {};
    arr.forEach(el => {
        if (!obj[el]){
            obj[el] = 1;
        }else {
            obj[el]++;
        }
    });
    for (const el in obj){
        if (obj[el] === 1){
            return el;
        }
    }
    //console.log(obj)
}


/*
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
*/
/*
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}
*/

console.log(findUniq([ 1 ]));
console.log(findUniq([ 0, 1, 0 ]));
console.log(findUniq([ 0, 0, 1 ]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 3, 10, 3, 3, 3 ]));


// assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
// assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
// assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
// assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
// assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);