const assertEqual = require('./assertEqual');

const countLetters = function(string) {
  const result = {};
  for (const char of string) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

//TEST CODE

assertEqual(countLetters('Taco is the best').s, 2,);