/*
Intervals
Intervals are represented by a pair of integers in the form of an array. 
The first value of the interval will always be less than the second value. 
Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
 */

// function sumIntervals(intervals) {
//     let finalArr = [];
//     intervals.forEach(e => {
//       for ( let i = e[0]; i < e[1]; i++){
//         finalArr.push(i);
//       }
//     });
//     //console.log(finalArr);
//     //let aa = new Set (finalArr)
//     finalArr = [...new Set (finalArr)];
//     return finalArr.length; 
//     //console.log(aa);
// }

function sumIntervals(intervals){
  intervals = intervals.sort(function(a, b) { // O(n)
    return a[0] - b[0];
  });
  intervals = intervals.reduce(function(acc, el, index, array) { // O(n)
    const anterior = array[index - 1];
    if (array.length > 1 && anterior !== undefined) {
      if (el[0] < acc[acc.length - 1]) {
        if (el[1] >= acc[acc.length - 1]) {
          acc[acc.length - 1] = el[1];
        }
      } else {
        acc.push(...el);
      }
    } else {
      acc.push(...el);
    }
    return acc;
  }, []);
  let result = 0;
  for (let i = 0; i < intervals.length - 1 ; i+=2) { // O(2n)
    result+=(intervals[i + 1] - intervals[i]);
  }
 return result;
}

/*
function sumIntervals(xs) {
  let ys = xs.sort(([a,b], [c,d]) => a-c);
  let m = -Number.MAX_VALUE;
  let res = 0;
  for (let [a,b] of ys) {
    m = Math.max(m, a);
    res += Math.max(0, b-m);
    m = Math.max(m, b);
  }
  return res;
}
*/

/*
const sumIntervals = (intervals) => {
    intervals.sort((p, n) => p[1] - n[1]);

    for (let i = 0; i < intervals.length-1; i++) {
        if (intervals[i][1] > intervals[i+1][0]) {
            intervals[i][0] = Math.min(intervals[i][0], intervals[i+1][0])
            intervals[i][1] = intervals[i+1][1];
            intervals.splice(i+1,1);
            i = -1;
        }
    }
    return intervals.reduce((a, v) => a + (v[1]-v[0]),0);
}
*/

const test1 = [[1,5],[1,5]];
const test2 = [[1,4],[7, 10],[3, 5]];
const test3 = [[1,4]];

console.log(sumIntervals(test3));