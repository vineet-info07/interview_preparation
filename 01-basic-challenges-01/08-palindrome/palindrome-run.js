const isPalindrome = require("./palindrome");
const isPalindrome01 = require("./palindrome01");

const result = isPalindrome("nitin");
const result1 = isPalindrome("nitin&&&");
const result2 = isPalindrome01("madam");
const result3 = isPalindrome01("daadaf&&&");

console.log(result, result1);
console.log(result2, result3);
