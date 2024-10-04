/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/
function humanReadable (seconds) {
    const menitMentah = Math.floor(seconds/60);
    const detik = [seconds%60];
    const menit = [];
    if (menitMentah > 59){
        menit.push(menitMentah%60);
    }else{
        menit.push(menitMentah);
    }
    const jam = [Math.floor(menitMentah/60)];
    const combine = [...jam, ...menit, ...detik].map(el => el.toString()).map(el => el.length < 2? '0'+ el : el).join(':');
    return combine;
};
console.log(humanReadable(359999));
/*
function humanReadable(seconds) {
  let pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}
*/

const sekon = 3599;

const jamm = parseInt(sekon / (60*60));
const menitt = parseInt((sekon / 60) % 60);
const detikk = sekon % 60;

console.log(jamm);
console.log(menitt);
console.log(detikk);






// doTest(     0, '00:00:00');
// doTest(    59, '00:00:59');
// doTest(    60, '00:01:00');
// doTest(    90, '00:01:30');
// doTest(  3599, '00:59:59');
// doTest(  3600, '01:00:00');
// doTest( 45296, '12:34:56');
// doTest( 86399, '23:59:59');
// doTest( 86400, '24:00:00');
// doTest(359999, '99:59:59');