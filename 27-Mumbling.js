/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
    const arr = [...s]
    console.log(arr);
    let finalStr = '';
	  for (let i = 0; i < arr.length; i++){
        for (let j = 0; j <= i; j++){
            finalStr += arr[i]
        }
        finalStr +=' ';
    }
    console.log(finalStr)
    const arr1 = finalStr.split(' ').filter(el => el !== '').map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join('-');
    //console.log(arr1)
    return arr1;
}
/*
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
*/
/*
function accum(s) {
	return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}
*/

const str ='RqaEzty'

console.log(accum(str))





let n = 5;
let string = "*";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "***";
  }
  string += " ";
}
console.log(string);