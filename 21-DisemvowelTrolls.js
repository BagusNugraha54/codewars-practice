/*
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/

/*
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}
*/

function disemvowel(str) {
    const res = str.match(/[^aeiou]/gi);
    if (res === null){
        return '';
    }else{
        return res.join('')
    }
}


console.log(disemvowel("This website is for losers LOL!")) //"Ths wbst s fr lsrs LL!")
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")) // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
console.log(disemvowel("What are you, a communist?")) // "Wht r y,  cmmnst?"
console.log(disemvowel("i"))