
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
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(without(words, ["hello", 1, "3"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"], true);
console.log(without(["1", "2", "3"], [1, "2", "3"]));
