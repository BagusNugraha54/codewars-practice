function digitize(n) {
    const str = n.toString();
    const arr = [];
    for (let i = 0; i < str.length; i++){
      arr.unshift(str.charAt(i));
    }
    return arr.map(el => Number(el));
}