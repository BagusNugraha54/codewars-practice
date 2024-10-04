/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H
patrick feeney => P.F
*/

const abbrevName = name => name.split(' ').map(el => el.charAt(0).toUpperCase()).join('.');

/*
function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}
*/

console.log(abbrevName("P Favuzzi Simangunsong"));


// assert.strictEqual(abbrevName("Sam Harris"), "S.H");
// assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
// assert.strictEqual(abbrevName("Evan Cole"), "E.C");
// assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
// assert.strictEqual(abbrevName("David Mendieta"), "D.M");