const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //check if both objs have the same number of keys
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  //the value for each key in one object has the same value has the same key in the other object
  for (const key in object1) {
    //if values are arrays are both arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //.. return false if both arrays are not equal
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      //else if both items are objects...
    } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      //... use a recursive call to check if the nested objects are equal
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
      //otherwise we are comparing two primitive values
    } else {
      //check if values are equal
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;


///////////////// TEST CODE  //////////////////////////
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
// assertEqual(eqObjects(ab, ba), true)

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// assertEqual(eqObjects(ab, abc), false)

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqArrays(cd.d, cd2.d), false);

// //RECURSIVE TESTS

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
// assertEqual(eqObjects({ a: { z: 1,
//                             x: {y: 5},
//                             b: {c: 2}
//                             }
//                       },
//                       { a: { z: 1,
//                             x: {y: 5},
//                             b: {c: 2}
//                           }
//                       }), true)
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)

