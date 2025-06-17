const removeDuplicates = require("./remove-duplicates");
const removeDuplicate01 = require("./remove-duplicate01");

const result = removeDuplicates([1, 2, 3, 2, 4, 1, 5]);
const result01 = removeDuplicate01([1, 2, 3, 2, 4, 1, 5]);
const result02 = removeDuplicate01([
  1,
  2,
  3,
  4,
  5,
  5,
  5,
  6,
  7,
  8,
  "hello",
  "hello",
  true,
  true,
]);

console.log(result, result01, result02);
