# # Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install tinyemperor/lotide`

**Require it:**

`const _ = require(‘tinyemperor/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual(test, expectation)`: pass a deep comparison of two arrays as a test, and your expected result of the comparison (boolean) and assertArrayEqual will log your result and will return true if your assertion was right and false if you were wrong;

* `assertEqual(test, expectation)`: pass an expression as a test, and your expected result of the expression (primitive data types only) and assertEqual will log your result and will return true if your assertion was right and false if you were wrong.

* `assertObjectsEqual(test, expectation)`: pass a deep comparison of two objects as a test, and your expected result of the comparison (boolean) and assertObjectsEqual will log your result and will return true if your assertion was right and false if you were wrong.

* `countLetters(string)`: returns an object with the number of occurrences of each character in your string.

* `countOnly(array, {string: boolean, string: boolean})`: count only will return a filtered array using the object argument’s keys as filters. The function will either add or filter the object’s property to the returned array based on it’s boolean value (true or false respectively).

* `eqArrays(array1, array2)`: will return a deep object comparison of the two arrays passed in as arguments. (true/ false)

* `eqObjects(object1, object2)`: will return a deep object comparison of the two objects passed in as arguments. (true/ false)

* `findKey(object, callback)`: will return the first key for which the callback function returns a truthy value. If no key is found, then it should return undefined.

* `findKeyByValue(object, searchValue)`: will search through object and will return the first key associated with searchValue. If searchValue is not in the object, function will return undefined.

* `flatten(array)`: will take an array with multiple nested arrays and will return an array that is one level deep with all values.

* `head(array)`: will return the first value of an array containing one or more elements. If array is empty it will return undefined.

* `index.js`: entry point for library. Import this module to gain object to full library of functions.

* `letterPositions(string)`: will take a string and return object of characters in string paired with the indices of all their occurrences in the string.

* `map(array, callback)`: will return a new array based on the results of the callback function.

* `middle(array)`: will return the middle elements of a given array. will return an array of one element for an input array with an odd number of elements, an array of two elements for an input array with an even number of elements, and will return an empty array for an array shorter than 2 elements long.

* `tail(array)`: will return a new array that will omit the first element of the given array. If the given array is empty, it will return an empty array.

* `takeUntil(array, callback)`: will return a new array with values starting from the zero index on up until the callback returns a truth value.

* `without(array, array2)`: will return a subset of array1 by removing any elements present in array2.
