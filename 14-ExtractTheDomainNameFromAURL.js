// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url){
    const str = url.split('.');
    
    //console.log(str);
    
    if (str[0] === 'www' || str[0] === 'http://www' || str[0] === 'https://www'){
        return str[1]
    }else if (!(str[0].includes('http'))){
        return str[0]
    }else{
        const a =str[0].split('//')
        return a[1]
        //console.log(a);
    }
    
}

// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
// };

// function domainName(url){
//     return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.zombie-bites-you.com"));
console.log(domainName("www74u2sjepgtwq-zcg9lf.com"))