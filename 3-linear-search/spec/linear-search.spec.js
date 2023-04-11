const { linearSearch, globalLinearSearch } = require('../linear-search');

describe("linearSearch()", function () {
  it("returns first index of item in array", function () {
    let item = 3;
    let arr = [1, 2, 3, 4, 5];
    expect(linearSearch(item, arr)).toEqual(2);
  });
  it("returns -1 if item not found", function () {
    let item = 0;
    let arr = [1, 2, 3, 4, 5];
    expect(linearSearch(item, arr)).toEqual(-1)
  });
  it("checks if array is not empty", function () {
    let arr = [1, 2, 3, 4, 5];
    expect(arr.length > 0).toBeTruthy()
  });
});

describe("globalLinearSearch()", function () {
  it("returns array indxes of items in array", function () {
    let item = 'a';
    let arr = ['b', 'a', 'n', 'a', 'n', 'a', 's'];
    expect(globalLinearSearch(item, arr)).toEqual([1, 3, 5]);
  });
  it("checks if arr is an array", function () {
    let arr = ['g', 'o', 'g', 'g', 'l', 'e', 's'];
    expect(Array.isArray(arr)).toBe(true);
  });
  it("checks if item is not falsy", function () {
    let item = 'g';
    let arr = ['g', 'o', 'g', 'g', 'l', 'e', 's'];
    expect(item).not.toBeFalsy();
  });
});
