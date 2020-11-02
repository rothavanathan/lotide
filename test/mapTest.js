const assert = require('chai').assert;
const { expect } = require('chai');
const map = require('../map');

describe('map', () => {

  it('should return a new array based on the results of the callback function', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });
  
  it('should return a new array', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word);
    expect(results1).to.eql(words).but.not.equal(words);
  });

});
