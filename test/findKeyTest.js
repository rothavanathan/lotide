const assert = require('chai').assert;
const expect = require('chai').expect;
const findKey = require('../findKey');

describe('findKey', () => {

  it('should scan the object and return the first key for which the callback returns a truthy value', () => {
    const starsObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const result = findKey(starsObj, x => x.stars === 2);
    assert.strictEqual(result, 'noma');
  });
  
  it('should return undefined if callback doesn\'t return a truthy value', () => {
    const starsObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const result = findKey(starsObj, x => x.stars === 4);
    expect(result).to.be.undefined;
  });

});
