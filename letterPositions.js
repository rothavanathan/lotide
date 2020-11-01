const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(string) {
  const results = {};
  for (const i in string) {
    if (!results[string[i]]) {
      if (string[i] !== " ") {
        results[string[i]] = [Number(i)];
      }
    } else {
      results[string[i]].push(Number(i));
    }
  }
  return results;
};


//TEST CODE
assertArraysEqual(eqArrays(letterPositions('hello')["l"], [2,3]), true);
assertArraysEqual(eqArrays(letterPositions('Romesh')["s"], [4]), true);
assertArraysEqual(eqArrays(letterPositions('Romesh')["p"], [3]), false);