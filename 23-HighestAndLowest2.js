function highAndLow(numbers){
    const arr = numbers.split(' ').filter(el => el).map(el => parseInt(el));
    console.log(arr);
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    //console.log(max)
    //console.log(min)
    return `${max} ${min}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 -49 -4"));
console.log(highAndLow("1 2 3")); 
console.log(highAndLow("42    35 42"));
