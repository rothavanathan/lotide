const assert = require('chai').assert;
const expect = require('chai').expect;
const head = require('../head');

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    const result = head([1,2,3]);
    assert.strictEqual(result, 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns undefined for an empty array", () => {
    const result = head([]);
    expect(result).to.be.undefined;
  });
});

