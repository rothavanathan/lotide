const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word.length);
console.log(results1);


//testcode

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


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'], true);
assertArraysEqual(results2, ['r', 'o', 'o', 'a', 'o'], true);
assertArraysEqual(results3, [6, 7, 2, 5, 3], true);