/*
Implement a function that accepts 3 integer values a, b, c. 
The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Examples:

Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false 
*/
function isTriangle(a,b,c){
   const arr = [a,b,c].sort((a,b)=> a-b);
   for (const el of arr){
        if (el <=0){
            return false;
        }
   }
   const high = Math.max(...arr);
   const pop = arr.pop()
   const low = arr.reduce((acc,cv)=> acc + cv,0);
   if (low <= high){
        return false;
   }else{
        return true;
   }
};
//const isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2
/*
function isTriangle(a,b,c)
{
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
  
  return a+b > c;
}
*/
/*
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}
*/
console.log(isTriangle(1,2,2))
// assert.strictEqual(isTriangle(1,2,2), true);
// assert.strictEqual(isTriangle(7,2,2), false);