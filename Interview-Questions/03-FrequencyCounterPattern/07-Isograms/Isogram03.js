// Approach 3: Manual Char Scan

/** 
📥 Input: "machine"
📤 Output: true
📥 Input: "repeater"
📤 Output: false
*/

const str1 = "machine";
const str2 = "repeater";

function isIsogram3(str) {
  const seen = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    if (seen[ch]) return false;
    seen[ch] = true;
  }
  return true;
}

const iso = isIsogram2(str1);
const iso2 = isIsogram2(str2);
console.log(iso, iso2);
