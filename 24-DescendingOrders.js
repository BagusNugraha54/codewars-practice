/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
    //[...n + '']; sama seperti toString
    const arr = n.toString().split('')
    console.log(arr);
    for (let i = 0; i < arr.length;){
        if (arr[i] === '-'){
            //console.log(arr[i+1])
            arr[i] = arr[i] + arr[i+1]
            //console.log(i);
            arr.splice(i+1,1);
        }i++;
    }
    //console.log(arr);
    const numbe = arr.map(el => parseInt(el)).sort((a, b) => a - b).reverse();
    return numbe
}
/*
function descendingOrder(n){
    const arr = n.toString().split('').map(el => +el).sort().reverse();
    console.log(arr);
    const num = Number(arr.join(''));
    return num
}
*/

/*
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
*/

console.log(descendingOrder('12345678-976-1'));
//console.log(descendingOrder(12343587878956789));