//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

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
  if ((eqArrays(array1, array2) && expectation === true) || (!eqArrays(array1, array2) && expectation === false) ) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2} is ${expectation}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} === ${array2} is not ${expectation}`);
  }
};

//TEST CODE

const arrayRed = [3, 5, 7];
const arrayBlue = [3, 5, 7];
const arrayGreen = [2];
const arrayBlack = [5, 3, 7];

assertArraysEqual(arrayBlue, arrayGreen, false);