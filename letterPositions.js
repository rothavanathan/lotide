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
console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions('hello').l, [2,3], true);