// Approach 1: Frequency + Filter

/**
 Input: "programming"
Output: { r: 2, g: 2, m: 2 }
 */

const str = "programming";

function countDuplicates1(str) {
  const freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  return Object.fromEntries(Object.entries(freq).filter(([_, v]) => v > 1));
}

const dupChar = countDuplicates1(str);
console.log(dupChar);
