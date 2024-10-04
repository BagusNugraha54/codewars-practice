/*
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
function count(string) {
    const obj = {};
    const arr = [...string];
    arr.forEach(el => {
        if (!obj[el]){
            obj[el] = 1;
        }else{
            obj[el]++;
        }
    });
    return obj;
};
/*
function count (string) {  
  const count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
*/
/*
function count (string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}
*/
console.log(count('aba'));

// test('', {});
// test('a', {'a': 1});
// test('ab', {'a': 1, 'b': 1});
// test('aba', {'a': 2, 'b': 1});
// test('ABC', {'A': 1, 'B': 1, 'C': 1});