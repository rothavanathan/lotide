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


assertArraysEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't']), true);
assertArraysEqual(eqArrays(results2, ['r', 'o', 'o', 'a', 'o']), true);
assertArraysEqual(eqArrays(results3, [6, 7, 2, 5, 3]), true);