// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

// // TEST CODE
// //passing
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(4, (1 + 3));
// //failing
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(2, 1);
