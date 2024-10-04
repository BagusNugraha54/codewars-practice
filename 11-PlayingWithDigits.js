// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p){
    const b = [...(n.toString())];
    const x = b.reduce((acc, cv, i) => acc + Math.pow(cv, p + i), 0) // cv**(p + i) kyk gini juga bisa
    return x % n ? -1 : x / n
}
    //console.log(s)
    //return s.reduce((acc, cv) => acc + cv**2 ,0)

console.log(digPow(89, 1));
console.log(digPow(222, 2));
console.log(digPow(46288, 3));
