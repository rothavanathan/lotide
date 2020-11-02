const assert = require('chai').assert;
const { expect } = require('chai');
const letterPositions = require('../letterPositions');

describe('letterPositions', () => {

  it('should return all of the indices of the chosen character in a given string', () => {
    const result = letterPositions('hello')["l"];
    assert.deepEqual(result, [2, 3]);
  });

  
  it('should return an empty object when passed an empty string', () => {
    const result = letterPositions('hello');
    expect(result.r).to.be.undefined;
  });

  
  it('should return not return the indices of spaces', () => {
    const result = letterPositions('hello');
    expect(result[' ']).to.be.undefined;
  });

});

