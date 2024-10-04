/*
Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/
function createPhoneNumber(numbers){
    const a = `(${numbers.slice(0,3).join('')}) `;
    const b = [...numbers].slice(3, 10).map(el => el.toString());
    const c = b.splice(3, 0, '-');
    const d = [...a,...b].join('');
    return d;
}

/*
function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++){
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
*/
/*
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}
*/
/*
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
*/

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));