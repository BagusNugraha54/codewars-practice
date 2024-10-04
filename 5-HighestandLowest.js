// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//fungsi sort mutable, toSorted immutable
function highAndLow(numbers){
    const myArray = numbers.split(" ").filter(m => m !== "");
    //console.log(myArray)
    if (myArray.length === 1){
        const max = myArray.toSorted((a, b) => a - b).pop();
        return `${max}  ${max}`;
    }else{
        const max = myArray.toSorted((a, b) => a - b).pop();
        const min = myArray.toSorted((a, b) => b - a).pop();
        console.log(myArray.length)
        return `${max} ${min}`;
    }
}

// function highAndLow(numbers){
//     const no = numbers.split(' ');
//     return `${Math.max(...no)} ${Math.min(...no)}`;
//   }

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3")); 
console.log(highAndLow("42    35 42"));
