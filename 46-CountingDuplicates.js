/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
const  duplicateCount = text =>{
    const arr = Array.from(text.toLowerCase()).filter((v, i, self) => i !== self.indexOf(v));   
    return [...new Set(arr)].length;  
}
/*
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
*/

console.log(duplicateCount('Indivisibility'));
// assert.strictEqual(duplicateCount(""), 0);
// assert.strictEqual(duplicateCount("abcde"), 0);
// assert.strictEqual(duplicateCount("aabbcde"), 2);
// assert.strictEqual(duplicateCount("aabBcde"), 2,"should ignore case");
// assert.strictEqual(duplicateCount("Indivisibility"), 1)
// assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")