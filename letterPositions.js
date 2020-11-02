//will return all the indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

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

module.exports = letterPositions;

