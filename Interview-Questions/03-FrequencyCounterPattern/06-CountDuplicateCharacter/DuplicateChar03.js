// Approach 3: Manual Loop

/**
 Input: "programming"
Output: { r: 2, g: 2, m: 2 }
 */

const str = "programming";

function countDuplicates3(str) {
  const freq = {},
    result = {};
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    freq[ch] = freq[ch] ? freq[ch] + 1 : 1;
  }
  for (let key in freq) {
    if (freq[key] > 1) result[key] = freq[key];
  }
  return result;
}

const dupChar = countDuplicates3(str);
console.log(dupChar);
