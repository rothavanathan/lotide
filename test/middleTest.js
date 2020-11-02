const assert = require('chai').assert;
const middle = require('../middle');

describe("middle", () => {

  it("should return empty for arrays with one element", () => {
    const result = middle([1]);
    assert.deepEqual(result, []);
  });
  
  it("should return empty for arrays with two elements", () => {
    const result = middle([1, 2]);
    assert.deepEqual(result, []);
  });

  it("should return an array with two elements for arrays with an even number of elements", () => {
    const result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3]);
  });

  it("should return an array with one element for arrays with an odd number of elements", () => {
    const result = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(result, [3]);
  });
});
