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

module.exports = findKeyByValue;
