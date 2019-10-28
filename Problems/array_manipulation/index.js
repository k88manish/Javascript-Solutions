function arrayManipulation(n, queries) {
  // Initialize array
  const initialArray = Array(n).fill(0);
  let maxValue = 0;
  // Apply queries
  queries.forEach(query => {
    const [start, end, value] = query;

    initialArray[start - 1] += value;

    if (end <= n) {
      initialArray[end] -= value;
    }
  });

  initialArray.reduce((prev, curr) => {
    const sum = prev + curr;
    if (sum > maxValue) maxValue = sum;
    return sum;
  });

  return maxValue;
}

module.exports = {
  arrayManipulation
};
