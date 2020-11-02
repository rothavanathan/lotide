//tail returns everything but the first item of an array > length 1
//nothing on an array of length 1
//
const tail = function(array) {
  if (array.length === 0) {
    return [];
  }
  return array.slice(1);
};

module.exports = tail;