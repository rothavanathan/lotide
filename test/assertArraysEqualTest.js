const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


//TEST CODE

const arrayRed = [3, 5, 7];
const arrayBlue = [3, 5, 7];
const arrayGreen = [2];
const arrayBlack = [5, 3, 7];

assertArraysEqual(eqArrays(arrayBlue, arrayRed), true);
assertArraysEqual(eqArrays(arrayBlue, arrayGreen), false);
assertArraysEqual(eqArrays(arrayBlue, arrayBlack), false);