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
console.log(flatten([[1, 2], 3, 4, 5, 6]));
console.log(flatten([1, 2, 3, 4, 5, 6]));
console.log(flatten([1, 2, 3, [4, 5, 6], 7, [8, 9]]));