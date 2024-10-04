function findNeedle(haystack) {
    const arr = haystack.filter(el => el === 'needle');
    if (arr.length > 0) {
      for (let i=0; i<haystack.length;i++){
        if (haystack[i] === 'needle'){
          return 'found the needle at position ' + i;
        }
      }
    }else {
      return "Your function didn't return anything";
    }
          
};