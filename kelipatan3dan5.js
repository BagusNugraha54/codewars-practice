function kelipatan3dan5(max){
    const arr3 = [];
    for (let i = 3; i < max; i += 3){
        arr3.push(i);
    }
    const arr5 = [];
    for (let i = 5; i < max; i += 5){
        arr5.push(i);
    }
    
    console.log(arr3);
    console.log(arr5);
    
    const mix = [...arr3, ...arr5];
    return [...new Set(mix)].reduce((acc,cv)=>acc+cv)
    
}
console.log(kelipatan3dan5(30));