const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    //if key is in itemsToCount && is true in our itemsToCount object
    if ((Object.keys(itemsToCount).indexOf(item) !== -1) && itemsToCount[item] === true) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;



