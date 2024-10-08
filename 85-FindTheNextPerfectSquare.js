/*
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, 
depending on your language. You may assume the argument is non-negative.

Examples ( Input --> Output )

121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square

*/

function findNextSquare(sq) {
    let inte = Math.sqrt(sq);
    if (Number.isInteger(inte)){
        inte +=1;
        return inte ** 2;
    }else{
    return -1;
    }
};

console.log(findNextSquare(121));
console.log(findNextSquare(114));