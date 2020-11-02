const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('countLetters', () => {

  it('should return the number of times a character occurs in a string', () => {
    const result = countLetters('Taco is the best').s;
    assert.strictEqual(result, 2);
  });
  
  it('should return an empty object when passed an empty string', () => {
    const result = countLetters('');
    assert.deepEqual(result, {});
  });

});