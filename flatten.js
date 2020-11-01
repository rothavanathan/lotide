const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const flatten = function(nestedArray) {
  const flatArray = [];
  for (const element of nestedArray) {
    if (Array.isArray(element)) {
      flatArray.push(...element);
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};


//TESTS
assertArraysEqual(eqArrays(flatten([[1, 2], 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]), true);
assertArraysEqual(eqArrays(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 5, 6]), false);
assertArraysEqual(eqArrays(flatten([1, 2, 3, [4, 5, 6], 7, [8, 9]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]), true);