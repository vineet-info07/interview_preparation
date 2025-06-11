// Approach 1: Object + Sort

/**
📥 Input: "aabbbcc"
📤 Output: "bbbaacc" or any valid sorted order by frequency
*/

const str = "aabbbcc";

function rearrangeByFreq1(str) {
  const freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .map(([ch, count]) => ch.repeat(count))
    .join("");
}

const sort = rearrangeByFreq1(str);

console.log(sort);
