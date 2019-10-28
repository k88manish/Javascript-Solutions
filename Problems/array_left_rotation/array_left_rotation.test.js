const { leftRotate } = require(".");

describe("Array let rotation", () => {
  it("items after rotation", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(leftRotate(arr, 4)).toEqual("5 1 2 3 4");
  });
});
