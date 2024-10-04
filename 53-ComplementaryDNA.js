/**
 * Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
 * If you want to know more: http://en.wikipedia.org/wiki/DNA
 * In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
 * Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
 * DNA strand is never empty or there is no DNA at all (again, except for Haskell).
 * 
 * More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
 * Example: (input --> output)
 * 
 * "ATTGC" --> "TAACG"
 * "GTAT" --> "CATA"
 */
const dnaStrand = dna => {
    const arr = dna.split('')
    .map(el => { if (el == "A"){
                    return el = "T"
                }else if (el == "T"){
                    return el = "A"
                }else if (el == "G"){
                    return el = "C"
                }else if (el == "C"){
                    return el = "G"
                }
    })
    .join('');
    return arr;
};

/*
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}
*/

/*
const pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}
*/
console.log(dnaStrand("ATTGC"));

// assert.strictEqual(dnaStrand("AAAA"),"TTTT","String AAAA is")
// assert.strictEqual(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
// assert.strictEqual(dnaStrand("GTAT"),"CATA","String GTAT is")
