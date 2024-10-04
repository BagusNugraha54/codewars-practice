/*
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. 
And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
*/

function tribonacci(signature,n){
    const  a = [...signature];
    if (n === 0){
        return [];
    }else if ( n < signature.length){
        const arr = [];
        for ( let i = 0; i < n; i++){
            arr.push(signature[i])
        }
        return arr;
    }else {
        const trim = a =>{
            const   b = [...a].reduce((acc,cv)=> acc + cv, 0);
                    a.push(b);
                    signature.push(b);
                    a.shift();
            if (signature.length === n){
                return signature;
            }else{
                return trim(a)
            }
        }
        return trim(a); 
    }
};

/*
function tribonacci(signature,n){  
  for (let i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
*/
/*
function tribonacci(signature,n) {
  const result = signature.slice(0, n);
  while (result.length < n) {
    result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
  }
  return result;
}
*/

console.log(tribonacci([1,1,1], 10));
console.log(tribonacci([0,0,1], 10));
console.log(tribonacci([0,1,1], 10));
console.log(tribonacci([1,0,0], 10));
console.log(tribonacci([0,0,0], 10));
console.log(tribonacci([1,2,3], 10));
console.log(tribonacci([3,2,1], 10));
console.log(tribonacci([1,1,1],  1));
console.log(tribonacci([300,200,100], 0));
console.log(tribonacci([20,19,18], 2));
// doTest([ [1,1,1], 10], [1,1,1,3,5,9,17,31,57,105]   )
// doTest([ [0,0,1], 10], [0,0,1,1,2,4,7,13,24,44]     )
// doTest([ [0,1,1], 10], [0,1,1,2,4,7,13,24,44,81]    )
// doTest([ [1,0,0], 10], [1,0,0,1,1,2,4,7,13,24]      )
// doTest([ [0,0,0], 10], [0,0,0,0,0,0,0,0,0,0]        )
// doTest([ [1,2,3], 10], [1,2,3,6,11,20,37,68,125,230])
// doTest([ [3,2,1], 10], [3,2,1,6,9,16,31,56,103,190] )
// doTest([ [1,1,1],  1], [1])

// doTest([[300,200,100], 0], [])