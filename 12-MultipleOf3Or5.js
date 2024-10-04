/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number){
    // const multiple3 = Array.from({length: number}, (_,i) => i + 3);
    // const multiple5 = [...Array(number).keys()].map(i => i + 5);

    let sum = 0;
    for (let i = 1 ; i < number; i++){
        if (!(i % 3) || !(i % 5)){
            sum +=i
        }
    }
    return sum;

    // const multiple3 = [];
    // const multiple5 = [];
    // for (let i = 3 ; i < number; i++){
    //     if (i % 3 === 0){
    //         multiple3.push(i);
    //     }     
    // }
    // //return multiple3
    // for (let i = 5 ; i < number; i++){
    //     if (i % 5 === 0){
    //         multiple5.push(i);
    //     }    
    // }


    //const xx = [...multiple3, ...multiple5];
    //const yy = xx.filter((cv,i,self) => i == self.indexOf(cv))
    //console.log(yy)
    //return yy.reduce((acc, cv) => acc + cv, 0);
}


console.log(solution(30));