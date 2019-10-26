/**
 * 
 * [[1 1 1 0 0 0],
    [0 1 0 0 0 0],
    [1 1 1 0 0 0],
    [0 0 2 4 4 0],
    [0 0 0 2 0 0],
    [0 0 1 2 4 0]]
 * 
 * 
 * @param {*} arr 
 */
function hourglassSum(arr) {
  const rows = arr.length;
  const cols = arr[0].length;

  let max_sum = null;

  for (var i = 1; i <= rows - 2; i++) {
    for (var j = 1; j <= cols - 2; j++) {
      let sum = 0;
      // count the sum of hour glass
      for (var k = -1; k <= 1; k++) {
        for (var l = -1; l <= 1; l++) {
          sum += arr[i + k][j + l];
        }
      }

      sum -= arr[i][j - 1];
      sum -= arr[i][j + 1];

      if (max_sum === null) max_sum = sum;
      else if (max_sum < sum) max_sum = sum;
    }
  }
  return max_sum;
}

module.exports = {
  hourglassSum
};
