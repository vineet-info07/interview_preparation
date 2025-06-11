// Approach 2: Frequency Counter

/** 
📥 Input: "machine"
📤 Output: true
📥 Input: "repeater"
📤 Output: false
*/

const str1 = "machine";
const str2 = "repeater";

function isIsogram2(str) {
  const freq = {};
  for (let ch of str.toLowerCase()) {
    if (freq[ch]) return false;
    freq[ch] = true;
  }
  return true;
}

const iso = isIsogram2(str1);
const iso2 = isIsogram2(str2);
console.log(iso, iso2);
