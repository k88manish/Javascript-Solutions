const { hourglassSum } = require(".");

describe("2D Array - DS", () => {
  it("Find max sum of hourglass", () => {
    const arr = [
      [-1, 1, -1, 0, 0, 0],
      [0, -1, 0, 0, 0, 0],
      [-1, -1, -1, 0, 0, 0],
      [0, -9, 2, -4, -4, 0],
      [-7, 0, 0, -2, 0, 0],
      [0, 0, -1, -2, -4, 0]
    ];

    expect(hourglassSum(arr)).toEqual(0);
  });
});
