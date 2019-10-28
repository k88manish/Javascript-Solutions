/**
 * Minimum Swaps 2
 * You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates.
 * You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.
 * For example, given the array  we perform the following steps:
 * @param {*} a
 * @param {*} b
 * @param {*} arr
 */
function swap(a, b, arr) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function minimumSwap(arr) {
  let swaps = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== i + 1) {
      swap(i, arr[i] - 1, arr);
      i--;
      swaps++;
    }
  }

  return swaps;
}

module.exports = {
  minimumSwap
};
