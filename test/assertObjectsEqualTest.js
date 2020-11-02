const { expect } = require('chai');
const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

describe("assertObjectsEqual", () => {

  it("should return true if both objects are identical and expectation is true", () => {
    const dict1 = {a:1, b:[2,3]};
    const dict2 = {b:[2,3], a:1};
    const result = assertObjectsEqual(eqObjects(dict1, dict2),true);
    expect(result).to.be.true;
  });

  it("should return true if both objects are not identical and expectation is false", () => {
    const dict1 = {a:1, b:[2,3]};
    const dict3 = {a:2};
    const result = assertObjectsEqual(eqObjects(dict1, dict3), false);
    expect(result).to.be.true;
  });

  it("should return false if both objects are identical and expectation is false", () => {
    const dict1 = {a:1, b:[2, 3]};
    const dict2 = {a:1, b: [2, 3]};
    const result = assertObjectsEqual(eqObjects(dict1, dict2), false);
    expect(result).to.be.false;
  });

  it("should return false if both objects are not identical and expectation is true", () => {
    const dict1 = {a:1, b:[2,3]};
    const dict3 = {a:2};
    const result = assertObjectsEqual(eqObjects(dict1, dict3), true);
    expect(result).to.be.false;
  });
    
  // Returns true if both objects have identical keys with identical values.
  
  // Otherwise you get back a big fat false!
  
  
  // assertObjectsEqual(eqObjects(dict1, dict2), true);
  // assertObjectsEqual(eqObjects(dict1, dict3), false);
});

