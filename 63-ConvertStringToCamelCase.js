/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/
function toCamelCase(str){
    if (str === ''){
        return str;
    }else{
        const arr = str.split(/ |-|_/);
        const arr1 = arr.shift();
        const arr2 = [...arr].map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join('')
        return `${arr1}${arr2}`;
    }

};
/*
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
*/
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase(''));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));
// assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
// assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")