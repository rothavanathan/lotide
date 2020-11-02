const assert = require('chai').assert;
const { expect } = require('chai');
const countOnly = require('../countOnly');

describe('countOnly', () => {

  it('should return an object containing counts of everything that the input object listed as true.', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result1, { "Jason": 1, "Fang": 2});
  });
  
  it('should return an object that does not contain a key value pair for anything that the input object listed as false.', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    expect(result1.Agouhanna).to.be.undefined;
  });
  
  it('should return an object that does not contain a key value pair for any key that is not listed in the input object listed as true.', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    expect(result1.Kavith).to.be.undefined;
  });

});

