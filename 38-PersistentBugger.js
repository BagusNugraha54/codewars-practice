/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
*/
function persistence(num) {
    //const rdc = num.toString().split('').reduce((acc,cv) => acc * cv);
    if (num.toString().length === 1){
        return 0
    }else{
        for (let i = 1; ; i++){
            let rdc = num.toString().split('').reduce((acc,cv) => acc * cv);
            if (rdc.toString().split('').length === 1){
                return i;
            }else if (rdc.toString().split('').length > 1){
                num = rdc;
            }
        }
    }
}

/*
function persistence(num) {
   for (var i = 0; num > 9; i++) {
     num = num.toString().split('').reduce((t, c) => c * t);
   }
   return i;
}
*/

/*
const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}
*/
console.log(persistence(9123));


// assert.strictEqual(persistence(39),3);
// assert.strictEqual(persistence(4),0);
// assert.strictEqual(persistence(25),2);
// assert.strictEqual(persistence(999),4);

const aa = ['2','4'];
console.log(aa.reduce((acc,cv)=>acc * cv))