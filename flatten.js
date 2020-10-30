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


const flatten = function(nestedArray) {
  const flatArray = [];
  for (const element of nestedArray) {
    if (Array.isArray(element)) {
      flatArray.push(...element);
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};


//TESTS
assertArraysEqual(eqArrays(flatten([[1, 2], 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]), true);
assertArraysEqual(eqArrays(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 5, 6]), false);
assertArraysEqual(eqArrays(flatten([1, 2, 3, [4, 5, 6], 7, [8, 9]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]), true);