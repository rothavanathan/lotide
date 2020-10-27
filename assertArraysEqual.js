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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

//TEST CODE

const arrayRed = [3, 5, 7];
const arrayBlue = [3, 5, 7];
const arrayGreen = [2];
const arrayBlack = [5, 3, 7];

assertArraysEqual(arrayBlue, arrayRed);