const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(test, expectation) {
  if ((test && expectation === true) || (!test && expectation === false)) {
    console.log(`✅✅✅ Assertion Passed: your objects are ${expectation === true ? "equal" : "not equal"}, just like you thought!!`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: your objects are ${expectation === true ? "not equal!!" : "equal!!"}`);
  }
};

const dict1 = {a:1, b:[2,3]};
const dict2 = {b:[2,3], a:1};
const dict3 = {a:2};
assertObjectsEqual(eqObjects(dict1, dict2), true);
assertObjectsEqual(eqObjects(dict1, dict3), false);