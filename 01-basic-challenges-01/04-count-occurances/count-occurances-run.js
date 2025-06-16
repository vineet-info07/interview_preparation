const countOccurances = require("./count-occurances");
const countOccurances01 = require("./count-occurances01");

const result = countOccurances("hello world", "l");
const result1 = countOccurances01("hello world", "h");

console.log(result, result1);
