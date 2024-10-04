/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/
function basicOp(operation, value1, value2){
    if (operation === '+'){
        return value1 + value2
    }else if (operation === '-' ){
        return value1 - value2
    }else if (operation === '*' ){
        return value1 * value2
    }else if (operation === '/' ){
        return value1 / value2
    }else {
        return 0
    }
}

/*
Never use eval().
Executing JavaScript from a string is an BIG security risk.
With eval(), malicious code can run inside your application without permission.
With eval(), third-party code can see the scope of your application, which can lead to possible attacks.

function basicOp(o, a, b) {
  return eval(a+o+b);
}
*/

console.log(basicOp('+', 4, 7));