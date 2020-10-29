// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const starsObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(starsObj, x => x.stars === 2), "noma");
assertEqual(findKey(starsObj, x => x.stars === 3), "Akaleri");
assertEqual(findKey(starsObj, x => x.stars === 1), "Blue Hill");

