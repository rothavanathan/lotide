const assert = require('chai').assert;
const { expect } = require('chai');
const findKeyByValue = require('../findKeyByValue');

describe('findKeyByValue', () => {

  it('should return the key associated with the given value via the function argument', () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const result = findKeyByValue(bestTVShowsByGenre, 'The Wire');
    assert.strictEqual(result, "drama");
  });
  
  it('should return undefined if the value does not exist', () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const result = findKeyByValue(bestTVShowsByGenre, 'That \'70s Show');
    expect(result).to.be.undefined;
  });

});