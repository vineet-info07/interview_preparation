// Approach 1: Basic Split + Object

/**
 📥 Input: "the cat and the hat"
 📤 Output: { the:2, cat:1, and:1, hat:1 }
 */

const str = "the cat and the hat";

function wordCount1(str) {
  const words = str.toLowerCase().split(" ");
  const freq = {};
  for (let w of words) freq[w] = (freq[w] || 0) + 1;
  return freq;
}

const words = wordCount1(str);
console.log(words);
