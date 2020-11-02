//head() takes an array as a parameter and returns the first element
//if array is empty will return undefined
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};


module.exports = head;


