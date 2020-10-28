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

const assertArraysEqual = function(array1, array2, expectation) {
  if ((eqArrays(array1, array2) && expectation === true) || (!eqArrays(array1, array2) && expectation === false)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2} is ${expectation}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} === ${array2} is not ${expectation}`);
  }
};

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
const testArray = [1,2,3,4,5];
console.log(assertArraysEqual(middle(testArray),[3],true));
