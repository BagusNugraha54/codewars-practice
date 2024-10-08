/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without 
any elements with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

const uniqueInOrder = iterable => {
    const newArr = [];
    for (let i = 0; i < iterable.length; i++){
        if (newArr.length === 0 ){
            newArr.push(iterable[i]);
        }else if (iterable[i] === iterable[i-1]){
            continue;
        }else if (iterable[i] !== iterable[i-1]){
            newArr.push(iterable[i]);
        }
    }
    return newArr;
};

/*
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
*/

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));
