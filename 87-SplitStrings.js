/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace 
the missing second character of the final pair with an underscore ('_').

Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
function solution(str){
   const arr = [...str];
   
   const nestedArr = [];
    let a = 0;
    let b = 2;
   const slais = arr => { 
        nestedArr.push(arr.slice(a,b));
        a += 2;
        b += 2;
        
        if (nestedArr.length < Math.ceil(arr.length/2)){
            return slais(arr);
        }else{
            return nestedArr;
        }
   }
   slais(arr);
   //console.log(nestedArr)
   
   nestedArr.map((el,i,ar)=>{
    if (el.length === 1){
        ar[i].push('_');
        return ar;
    }
   })
   
   return nestedArr.map(el => el.join('')).filter(el => el !== '');
   
};

/*
function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}
*/

console.log(solution(""));

// assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
// assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
// assert.deepEqual(solution(""), []);