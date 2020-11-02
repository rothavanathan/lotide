const assertEqual = require('../assertEqual');

//passing
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(4, (1 + 3));
//failing
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(2, 1);