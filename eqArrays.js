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

module.exports = eqArrays;