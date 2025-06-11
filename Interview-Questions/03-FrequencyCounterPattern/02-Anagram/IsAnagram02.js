// Approach 2: Sort and Compare

const str1 = "listen";
const str2 = "silent";

function isAnagram2(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}

console.log(isAnagram2(str1, str2));
