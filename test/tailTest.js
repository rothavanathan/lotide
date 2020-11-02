const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words); // no need to capture the return value since we are not checking it
assertEqual(result.length, 2); // original array should still have 3 elements!
assertEqual(words.length, 3); // original array should still have 3 elements!


//test: one element array
const songs = ["I'll believe in anything"];
assertEqual(tail(songs).length, 0);

//test: empty array
const empty = [];
assertEqual(tail(empty).length, 0);
