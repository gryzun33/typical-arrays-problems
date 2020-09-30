
exports.min = function min (arr) {
    if(!arr || arr.length === 0) {
        return 0;
    }
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
    }
  return min;
}

exports.max = function max (arr) {
    if(!arr || arr.length === 0) {
        return 0;
    }
  let max = Math.max(...arr);
  return max;
}

exports.avg = function avg (arr) {
    if(!arr || arr.length === 0) {
        return 0;
    }
  let sum = arr.reduce((s, elem) => s + elem, 0);
  let average = sum/arr.length;
  return average;
}
