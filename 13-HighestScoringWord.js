/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/
// function high(x){
//     const kalimat = x.split(" ").map(el => el).map(i => i);
//     return kalimat
// }

// function high(x){
//   const words = x.split(' ');
//   const alphabetMap = {};
//   for (let i='a'.charCodeAt(), j = 1; i <= 'z'.charCodeAt(); i++, j++) {
//     alphabetMap[i] = j;
//   }
//   let highestScoringWord = { word: '', score: 0 };
//   words.forEach(w => {
//     const chars = w.split('');
//     const sumOfChars = chars.reduce((count, char) => count + alphabetMap[char.charCodeAt()], 0);
//     if (sumOfChars > highestScoringWord.score) {
//       highestScoringWord = { word: w, score: sumOfChars };
//     }
//   });

//   return highestScoringWord.word;

// }

// function high(x){
//     let alphabets = [
//       'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
//     ];
    
//     let words = x.split(" ");
//     let highestScore = 0;
//     let highestScoreWord = "";
    
//     for (let word of words) {
//       let lettersSum = 0;
      
//       for (let letter of word) {
//         lettersSum += alphabets.indexOf(letter) + 1;
//       }
      
//       if (lettersSum > highestScore) {
//         highestScore = lettersSum;
//         highestScoreWord = word;
//       }
//     }
    
//     return highestScoreWord;
//   }
function high(s){
    const as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    console.log(as);
    return s.split(' ')[as.indexOf(Math.max(...as))];
}
// console.log(high('man i need a taxi up to ubud'));
// console.log(high('what time are we climbing up the volcano'));
 console.log(high('take me to seminyak'));
// console.log(high('aa b'));
// console.log(high('b aa'));
// console.log(high('bb d'));
// console.log(high('d bb'));
// console.log(high('aaa b'));