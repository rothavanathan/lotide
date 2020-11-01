const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middleElement = [];
  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length <= 2) {
    return middleElement;
  }
  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (array.length % 2 === 1) {
    middleElement.push(array[(Math.floor(array.length / 2))]);
  }
  // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  if (array.length % 2 === 0) {
    middleElement.push(array[((array.length / 2) - 1)]);
    middleElement.push(array[((array.length / 2))]);
  }
  return middleElement;
};


// TEST CODE
const testArray = [1, 2, 3, 4, 5];
const testArray2 = [1, 2];
const testArray3 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(eqArrays(middle(testArray), [3]), true);
assertArraysEqual(eqArrays(middle(testArray2), []), true);
assertArraysEqual(eqArrays(middle(testArray3), [3, 4]), true);
assertArraysEqual(eqArrays(middle(testArray3), [3]), false);
