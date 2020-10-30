const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = function(array1, array2) {
  if (!array1 || !array2) {
    return undefined;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    //check if both items are arrays...
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      //..run the nested level through a recursive call of eqArrays
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    // we can assert both items are primitives and use strict equals
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


//Test code

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2",  "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([], []), true); // => true

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

//RECURSIVE TESTS

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4, [5, 6]]], [[2, 3], [4, [5, 6]]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);