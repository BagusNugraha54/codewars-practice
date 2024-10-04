/*

In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
min = 1 max = 26
*/
const alphabetPosition = text => text.toLowerCase().split('').map(el => el.charCodeAt(0)-96).filter(el => el > 0 && el < 27).join(" ");

//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
//console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//console.log(alphabetPosition("The narwhal bacons at midnight."));


console.log(alphabetPosition("}m8s$l)a"));