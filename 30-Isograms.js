/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
*/
function isIsogram(str){
    const newStr = str.toLowerCase();
    const uniq = [ ...new Set(newStr)];

    console.log(newStr.length)
    console.log(uniq.length)

    return newStr.length === uniq.length;
}

/*
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}
*/

/*
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}
*/

/*
function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}
*/

/*
function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}
*/

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));


let Arr = [
    'g', 'e', 'e', 'k', 's', 
    'f', 'o', 'r', 'g', 'e', 
    'e', 'k', 's'
];

let outputArray = [];

function removewithfilter(arr) {
    let outputArray = arr.filter(function (v, i, self) {

        // It returns the index of the first
        // instance of each value
        return i == self.indexOf(v);
    });

    return outputArray;
}

console.log(removewithfilter(Arr));
