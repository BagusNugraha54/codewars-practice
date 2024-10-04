/*
In this kata you have to write a simple Morse code decoder. 
While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". 
For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. 
The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, 
a single space is used to separate the character codes and 3 spaces are used to separate words. 
For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, 
the most notorious of those is the international distress signal SOS (that was first issued by Titanic), 
that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
*/

 const decodeMorse = function(morseCode){
    const morseDict = {
        'A' : '.-',
        'B' : '-...',
        'C' : '-.-.',
        'D' : '-..',
        'E' : '.',
        'F' : '..-.',
        'G' : '--.',
        'H' : '....',
        'I' : '..',
        'J' : '.---',
        'K' : '-.-',
        'L' : '.-..',
        'M' : '--',
        'N' : '-.',
        'O' : '---',
        'P' : '.--.',
        'Q' : '--.-',
        'R' : '.-.',
        'S' : '...',
        'T' : '-',
        'U' : '..-',
        'V' : '...-',
        'W' : '.--',
        'X' : '-..-',
        'Y' : '-.--',
        'Z' : '--..',
        '0' : '-----',
        '1' : '.----',
        '2' : '..---',
        '3' : '...--',
        '4' : '....-',
        '5' : '.....',
        '6' : '-....',
        '7' : '--...',
        '8' : '---..',
        '9' : '----.',
        '.' : '.-.-.-',
        ',' : '--..--',
        '?' : '..--..',
        '!' : '-.-.--',
        'SOS' : '...---...',

        
    }
    const arr = morseCode.split(' ')//.filter(el => el !== '');
    //console.log(arr);
    const result = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === ''){
            result.push('-');
        }else if (arr[i] !== ''){
            for (let prop in morseDict) {
                if (morseDict.hasOwnProperty(prop)) {
                    if (morseDict[prop] === arr[i])
                        result.push(prop);
                    
                }
            }
        }
    }
    console.log(result)
    return result.join('').split('-').filter(el=> el !== '').join(' ')
};

/*
decodeMorse = function(morseCode){
  return morseCode
    .trim()
    .split(/  | /)
    .map( (code) => MORSE_CODE[code] || ' ')
    .join('');
}
*/
/*
decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}
*/

const teks = "      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  ";
//console.log(decodeMorse('   .... . -.--   '));
console.log(decodeMorse(teks));


// assert.strictEqual(decodeMorse('   .... . -.--   '), 'HEY');
// assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');











// const letters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,?\'!/()&:;=+-_"$@';

// const morseValues =
// [
//     '.-', '-...', '-.-.', '-..', '.', '..-.',
//     '--.', '....', '..', '.---',
//     '-.-', '.-..', '--', '-.', '---',
//     '.--.', '--.-', '.-.', '...', '-',
//     '..-', '...-', '.--', '-..-', '-.--',
//     '--..', '-----', '.----', '..---',
//     '...--', '....-', '.....', '-....',
//     '--...', '---..', '----.', '.-.-.-',
//     '--..--', '..--..', '.----.', '-.-.--',
//     '-..-.', '-.--.', '-.--.-',
//     '.-...', '---...', '-.-.-.', '-...-',
//     '.-.-.', '-....-', '..--.-',
//     '.-..-.', '...-..-', '.--.-.'
// ];
// console.log(morseValues.length)
// console.log(letters.length)
// const translateMorseToText = (morseText) => {
//     const morseWords = morseText.split('/');
//     const translatedWords =
//         morseWords.map((morseWord) => {
//             const morseChars = morseWord.split(' ');
//             return morseChars
//                 .map((morseChar) => {
//                     return reverseMorseCode[morseChar]
//                         || morseChar;
//                 })
//                 .join('');
//         });
//     return translatedWords.join(' ');
// };
