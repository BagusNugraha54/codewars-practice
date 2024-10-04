/**
 * Write a function that takes an integer as input, 
 * and returns the number of bits that are equal to one in the binary representation of that number. 
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */

function countBits(n) {
    const biner = [];
    const makeBiner = n =>{
        const a = n / 2;
        if (Math.floor(a) > 0){
            if (Number.isInteger(a)){
                biner.unshift(0);
            }else{
                biner.unshift(1)
            }
            n = Math.floor(a);
            return makeBiner(n)
        }else if (Math.floor(a) === 0){
            biner.unshift(1)
            return biner;
        }else{
            return biner;
        }
    }
    if (n === 0){
        return 0
    }else{
        makeBiner(n)
    }
    return biner.filter(el => el === 1).length
};

/*
const countBits = n => n.toString(2).split('0').join('').length;
*/
/*
const countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};
*/
/*
function countBits(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
}
*/
console.log(countBits(10))

// assert.strictEqual(countBits(0), 0);
// assert.strictEqual(countBits(4), 1);
// assert.strictEqual(countBits(7), 3);
// assert.strictEqual(countBits(9), 2);
// assert.strictEqual(countBits(10), 2);