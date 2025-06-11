// Approach 1: Sort by Frequency

/**
📥 Input: "aaabbccccd" and k = 2
📤 Output: ['c', 'a']
*/

const str = "aaabbccccd";

function topKFreq1(str, k) {
  const freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([ch]) => ch);
}

const kChar = topKFreq1(str);
console.log(kChar);
