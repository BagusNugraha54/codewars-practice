/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/
function towerBuilder(nFloors) {
    const arr = [];
    let star = "*";
    for (let i = 0; i < nFloors; i++ ){
        arr.push(star);
        star += '**';
    }
    //console.log(arr)
    const len = arr[arr.length-1].length;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length !== len){
            arr[i] = arr[i].padStart(((len + 1)/2)+i, " ");
            arr[i] = arr[i].padEnd(len, " ");
        }
    }
    return arr;
};

/*
function towerBuilder(nFloors) {
  const tower = [];
  for (let i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}
*/
/*
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}
*/

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
console.log(towerBuilder(4));
console.log(towerBuilder(5));
// console.log(towerBuilder(6));
// console.log(towerBuilder(7));
// console.log(towerBuilder(8));
// console.log(towerBuilder(9));
// console.log(towerBuilder(10));
// Test.assertDeepEquals(towerBuilder(1), ["*"]);
// Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
// Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);