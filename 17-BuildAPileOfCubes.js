/*
Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1


*/
//ini cara barbar yang sukses
// function findNb(m) {
//     const arr = [1];
//     const breakDown = () => {
//             const newArr= arr.map(el => Math.pow(el, 3)).reduce((acc,cv)=> acc + cv);
//             //console.log(newArr)
//             if (newArr === m){
//                 return parseInt(arr.slice(-1));
//             }else if (newArr > m || !m){
//                 return -1;
//             }else{
//                 const add = parseInt(arr.slice(-1)) + 1;
//                 arr.push(add)
//                 return breakDown()
//                 //console.log(arr)
//             }
//     }
//     return breakDown()
// }

function findNb(m) {
    let sum = 0;
    //sum += Math.pow(2, 3)
    for (let i = 1; ;i++){
        sum += Math.pow(i, 3)
        if ( sum === m){  
            return i;
        }else if (sum > m || !m){
            return -1;
        }
    }
     
}

// function findNb(m) {
//     let n = 0
//     while (m > 0) m -= ++n**3
//     return m ? -1 : n
//   }



console.log(findNb(1));

// console.log(findNb(4183059834009)) //2022
// console.log(findNb(135440716410000));//4824
// console.log(findNb(40539911473216)); //3568
// console.log(findNb(24723578342962)); //-1