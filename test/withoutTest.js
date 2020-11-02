const assert = require('chai').assert;
const expect = require('chai').expect;
const without = require('../without');

describe('without', () => {

  it('should return a new array with only those elements from source that are not present in the itemsToRemove array', () => {
    const result = without(["1", "2", "3"], ["1"]);
    assert.deepEqual(result, ['2', '3']);
  });
  
  it('should not be modifying the original array', () => {
    const array1 = ["1", "2", "3"];
    const result = without(["1", "2", "3"], []);
    expect(result).to.eql(array1).but.not.equal(array1);
  });

});

