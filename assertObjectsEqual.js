const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //check if both objs have the same number of keys
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  //the value for each key in one object has the same value has the same key in the other object
  for (const key in object1) {
    //if values are arrays are both arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //.. return false if both arrays are not equal
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      //if values aren't both arrays
    } else {
      //check if values are equal
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(obj1, obj2, expectation) {
  const inspect = require('util').inspect;
  if ((eqObjects(obj1, obj2) && expectation === true) || (!eqArrays(obj1, obj2) && expectation === false)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)} is ${expectation}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} === ${inspect(obj2)} is not ${expectation}`);
  }
};

const dict1 = {a:1, b:[2,3]};
const dict2 = {b:[2,3], a:1};
assertObjectsEqual(dict1, dict2, true);