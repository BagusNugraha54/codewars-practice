/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/
function findOutlier(integers){
    const genap = integers.filter(el=> el % 2 === 0);
    const ganjil = integers.filter(el=> el % 2 !== 0);
    
    if (genap.length === 1){
        return genap[0];
    }else{
        return ganjil[0];
    }

    //return genap.length === 1 ? genap[0] : ganjil[0];
}

console.log(findOutlier([0, 1, 2]));

// Test.assertEquals(findOutlier([0, 1, 2]), 1)
// Test.assertEquals(findOutlier([1, 2, 3]), 2)
// Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
// Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
// Test.assertEquals(findOutlier([1,1,0,1,1]), 0)