/*
The rgb function is incomplete. 
Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
Valid decimal values for RGB are 0 - 255. 
Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*/
// const componentToHex = (c) => {
//     const hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
//   }
  
//   const rgbToHex = (r, g, b) => {
//     return `${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
//   }

// function convert(c){
//     const a = c.toString(16)
//     if (a < 0 || a.includes("-")){
//         return "00"
//     }else if (a.length > 2){
//         return "ff"
//     }else if(a.length === 1){
//         return "0"+a
//     }else{
//         return a
//     }
// } 
  
// const rgb = (r, g, b) => {
//       const result = `${convert(r)}${convert(g)}${convert(b)}}`;
//       return result.toUpperCase()
// }
function rgb(r, g, b){
    return [r,g,b].map(function(x) {
      return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join('').toUpperCase();
}
  
  console.log(rgb(255, 51, 255));
  console.log(rgb(0, 0, 0));
  console.log(rgb(0, 0, -20));
  console.log(rgb(300, 255, 255));
  console.log(rgb(231, -13, 154));