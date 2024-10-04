/**
 * Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
 * However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
 * Your task is to write a function maskify, which changes all but the last four characters into '#'.
 * 
 * Examples (input --> output):
 * 
 * "4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""
* //"What was the name of your first pet?"
* "Skippy" --> "##ippy"
* "Nananananananananananananananana Batman!" --> "####################################man!"
*/
function maskify(cc) {
    const arr = [...cc];
    for (let i = 0; i < arr.length-4; i++){
        arr[i] = '#';
    }
    return arr.join('')
}
/*
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
*/
/*
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}
*/
/*
function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
  //return cc.replace(/.(?=.{4})/g, "#")
}
*/


console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify('11111'));
// Test.assertEquals(maskify('4556364607935616'), '############5616');
// Test.assertEquals(maskify('1'), '1');
// Test.assertEquals(maskify('11111'), '#1111');