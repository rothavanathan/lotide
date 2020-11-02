//should return the middle value of an array. for even length arrays it will return the two middle items in an array
const middle = function(array) {
  let middleElement = [];
  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length <= 2) {
    return middleElement;
  }
  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (array.length % 2 === 1) {
    middleElement.push(array[(Math.floor(array.length / 2))]);
  }
  // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  if (array.length % 2 === 0) {
    middleElement.push(array[((array.length / 2) - 1)]);
    middleElement.push(array[((array.length / 2))]);
  }
  return middleElement;
};

module.exports = middle;