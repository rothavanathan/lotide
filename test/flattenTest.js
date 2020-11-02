const assert = require('chai').assert;
const flatten = require('../flatten');

describe('flatten', () => {

  it('should return an array one level deep containing all values from a nested array', () => {
    const result = (flatten([[1, 2], 3, 4, 5, 6]));
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });
  
  it('should return an array one level deeo containing all values from a multi level nested array', () => {
    const result = flatten([1, 2, 3, [4, [5, 6]], 7, [8, 9]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

});