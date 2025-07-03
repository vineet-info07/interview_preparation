const arrayIntersection = require("./array-intersection");
const arrayIntersection01 = require("./array-intersection-01");

const result = arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
const result01 = arrayIntersection01([1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7, 8]);

console.log(result, result01);
