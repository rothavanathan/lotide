//Implement without.js which will return a subset of a given array, removing unwanted elements.

//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.


const without = function(sourceArray, itemsToRemove) {
  
  //initialize outputArray
  let outputArray = [...sourceArray];
  //iterate through each item in items to remove
  for (const item of itemsToRemove) {
    if (outputArray.includes(item)) {
      //filter the item out of the array
      outputArray = outputArray.filter(element =>
        element !== item);
    }
  }
  return outputArray;
};

module.exports = without;

