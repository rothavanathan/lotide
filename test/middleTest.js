const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const eqArrays = require('../eqArrays');

// TEST CODE
const testArray = [1, 2, 3, 4, 5];
const testArray2 = [1, 2];
const testArray3 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(eqArrays(middle(testArray), [3]), true);
assertArraysEqual(eqArrays(middle(testArray2), []), true);
assertArraysEqual(eqArrays(middle(testArray3), [3, 4]), true);
assertArraysEqual(eqArrays(middle(testArray3), [3]), false);