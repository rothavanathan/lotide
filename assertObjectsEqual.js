// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(test, expectation) {
  if ((test && expectation === true) || (!test && expectation === false)) {
    console.log(`✅✅✅ Assertion Passed: your objects are ${expectation === true ? "equal" : "not equal"}, just like you thought!!`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: your objects are ${expectation === true ? "not equal!!" : "equal!!"}`);
    return false;
  }
};

module.exports = assertObjectsEqual;