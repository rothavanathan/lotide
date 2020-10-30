//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const eqArrays = function(array1, array2) {
  if (!array1 || !array2) {
    return undefined;
  }
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

const assertArraysEqual = function(test, expectation) {
  if ((test && expectation === true) || (!test && expectation === false)) {
    console.log(`✅✅✅ Assertion Passed: your arrays are ${expectation === true ? "equal" : "not equal"}, just like you thought!!`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: your arrays are ${expectation === true ? "not equal!!" : "equal!!"}`);
  }
};

//TEST CODE

const arrayRed = [3, 5, 7];
const arrayBlue = [3, 5, 7];
const arrayGreen = [2];
const arrayBlack = [5, 3, 7];

assertArraysEqual(eqArrays(arrayBlue, arrayRed), true);
assertArraysEqual(eqArrays(arrayBlue, arrayGreen), false);
assertArraysEqual(eqArrays(arrayBlue, arrayBlack), false);