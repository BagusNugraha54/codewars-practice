/*
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:
1: -1
14: -14
-34: 34
*/
const opposite = number => number < 0 ? Math.abs(number) : -Math.abs(number);
/*
function opposite(number) {
    return(-number);
}
*/
console.log(opposite(-12525220.3325));
console.log(opposite(14));
console.log(opposite(-34));
console.log(opposite(0));