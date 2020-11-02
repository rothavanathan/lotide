const flatten = function(nestedArray) {
  const flatArray = [];
  for (const element of nestedArray) {
    if (Array.isArray(element)) {
      flatArray.push(...flatten(element));
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

module.exports = flatten;