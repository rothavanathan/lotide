const eqArrays = function(array1, array2) {
  if (!array1 || !array2) {
    return [];
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

//Implement without.js which will return a subset of a given array, removing unwanted elements.

//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const removeItemFromArray = function(array, itemToRemove) {
  return array.filter(item =>
    item !== itemToRemove
  );
};


const without = function(sourceArray, itemsToRemove) {
  //initialize outputArray
  let outputArray = [...sourceArray];
  //iterate through each item in items to remove
  for (const item of itemsToRemove) {
    if (sourceArray.includes(item)) {
      outputArray = removeItemFromArray(outputArray, item);
    }
  }
  return outputArray;
};

//Use assertArraysEqual to write test cases for various scenarios.

//Write a test case to make sure that the original array is not modified.
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
console.log(without(words, ["hello", 1, "3"]));
assertArraysEqual(eqArrays(words, ["hello", "world", "lighthouse"]), true);
// more test cases
assertArraysEqual(eqArrays(without(["1", "2", "3"], ["1"]), ["2", "3"]), true);
assertArraysEqual(eqArrays(without(["1", "2", "3"], ["1"]), [1, "2", "3"]), false);
