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

//testcode

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

assertArraysEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't']), true);
assertArraysEqual(eqArrays(results2, ['r', 'o', 'o', 'a', 'o']), true);
assertArraysEqual(eqArrays(results3, [6, 7, 2, 5, 3]), true);