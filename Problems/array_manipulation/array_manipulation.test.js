const { arrayManipulation } = require(".");

describe("Array manipulation", () => {
  it("Find max number after applying given queries", () => {
    const arr = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
    expect(arrayManipulation(5, arr)).toEqual(200);
  });
});
