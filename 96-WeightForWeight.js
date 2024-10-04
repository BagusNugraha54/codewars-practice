/*
My friend John and I are members of the "Fat to Fit Club (FFC)". 
John is worried because each month a list with the weights of members is published 
and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". 
It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed.
*/
//dapet 78 poin euyy!!!..
function orderWeight(strng) {
    const arr = strng.split(' ');
    const redus = arr.map(el => el.split('').map(ell => Number(ell)).reduce((acc,cv) => acc + cv,0));
    const obj = {};
    const finalArr = [];
    redus.forEach((el)=> {
        obj[el] = [arr.filter(el1 => (el1.split('').map(el2 => Number(el2)).reduce((acc,cv) => acc + cv,0)) === el ).sort().join(' ')];
    });
    console.log(obj)
    for (const el in obj){
        finalArr.push(obj[el]);
    };
    return finalArr.join(' ');
};
/*
function orderWeight(strng) {
 const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
  function comp(a,b){
    let sumA = sum(a);
    let sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
   };
 return strng.split(' ').sort(comp).join(' ');
};
*/

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 11 22 123"));
console.log(orderWeight("103 123 4444 99 2000"));
// assert.strictEqual(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
// assert.strictEqual(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")



//not working for the second string test due to object doesn't allow duplicate key
function orderWeight1(strng) {
    const arr = strng.split(' ');
    const  duplicatArr = arr.filter((v, i, self) => i !== self.indexOf(v));
    const obj = {};
    const newArr = [];
    arr.forEach((el)=> {
        obj[el] = el.split('').map(ell => Number(ell)).reduce((acc,cv) => acc + cv,0);
    });
    const arrafy = Object.entries(obj).sort(([,a],[,b]) => a-b);
    for (let i = 0; i < arrafy.length; i++){
        newArr.push(arrafy[i][0]);
    }
    let iter = 0;
    for (let i=0;i<newArr.length;i++){
        if (newArr[0] === duplicatArr[iter]){
            newArr.splice(i+1,0, duplicatArr[iter]);
            iter++;
        }
    }
    return newArr.join(' ')
};

console.log(orderWeight1("2000 10003 1234000 44444444 9999 11 11 11 22 123"));