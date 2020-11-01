//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(test, expectation) {
  if ((test && expectation === true) || (!test && expectation === false)) {
    console.log(`✅✅✅ Assertion Passed: your arrays are ${expectation === true ? "equal" : "not equal"}, just like you thought!!`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: your arrays are ${expectation === true ? "not equal!!" : "equal!!"}`);
  }
};
module.exports = assertArraysEqual;

// //TEST CODE

// const arrayRed = [3, 5, 7];
// const arrayBlue = [3, 5, 7];
// const arrayGreen = [2];
// const arrayBlack = [5, 3, 7];

// assertArraysEqual(eqArrays(arrayBlue, arrayRed), true);
// assertArraysEqual(eqArrays(arrayBlue, arrayGreen), false);
// assertArraysEqual(eqArrays(arrayBlue, arrayBlack), false);