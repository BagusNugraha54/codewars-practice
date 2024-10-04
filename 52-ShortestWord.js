/*
Description:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s){
    const arr = s.split(' ').map(el=> el.length);
    return Math.min(...arr);

}

console.log(findShort("turns out random test cases are easier than writing out basic ones"));

// assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
// assert.strictEqual(findShort("Let's travel abroad shall we"), 2);