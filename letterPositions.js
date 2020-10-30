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
console.log(letterPositions('hello'));
assertArraysEqual(eqArrays(letterPositions('hello')["l"], [2,3]), true);

console.log(letterPositions('Romesh'));
assertArraysEqual(eqArrays(letterPositions('Romesh')["s"], [4]), true);

console.log(letterPositions('Romesh'));
assertArraysEqual(eqArrays(letterPositions('Romesh')["p"], [3]), false);