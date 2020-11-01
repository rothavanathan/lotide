const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, searchValue) {
  //initialize return answer
  let key;
  for (const genre in obj) {
    if (obj[genre] === searchValue) {
      key = genre;
    }
  }
  return key;
};

//TEST CODE
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
//check fails
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "sciFi");
