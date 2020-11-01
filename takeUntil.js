// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  return results;
};


//TEST CODE

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(eqArrays(results1, [ 1, 2, 5, 7, 2 ]), true);
//EXPECTED RESULTS

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]), true);
assertArraysEqual(eqArrays(results2, [ 'I\'ve', 'to', 'Hollywood' ]), false);

// ---

