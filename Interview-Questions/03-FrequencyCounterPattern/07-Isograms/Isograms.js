// Approach 1: Set Comparison

/** 
📥 Input: "machine"
📤 Output: true
📥 Input: "repeater"
📤 Output: false
*/

const str1 = "machine";
const str2 = "repeater";

function isIsogram1(str) {
  const lower = str.toLowerCase();
  return new Set(lower).size === lower.length;
}

const iso = isIsogram1(str1);
const iso2 = isIsogram1(str2);
console.log(iso, iso2);
