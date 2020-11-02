const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {

  it("should return everything but the first item of an array when the array has more than one item", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });

  it("should not mutate original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ['Yo Yo', 'Lighthouse', 'Labs']);
  });

  it("should return an empty array when passed an array with one element", () => {
    const words = ["Labs"];
    const result = tail(words);
    assert.deepEqual(result, []);
  });

  it("should return an empty array when passed an empty array", () => {
    const words = [""];
    const result = tail(words);
    assert.deepEqual(result, []);
  });
    
});
