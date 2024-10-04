/**
 * Write a function that removes the spaces from the string, then return the resultant string.
 * 
 * example
 * 
 * Input -> Output
 * "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
 * "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
 * "8aaaaa dddd r     " -> "8aaaaaddddr"
 */
const  noSpace = x => [...x].filter(el => el !== ' ').join('');

/*
function noSpace(x){
  return x.replace(/\s/g, '');
}
*/
/*
function noSpace(x){return x.split(' ').join('')}
*/
/*
function noSpace(x) {
  return x.replaceAll(' ', '');
}
*/
console.log(noSpace('8aaaaa dddd r     '));

// assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
// assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
// assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 