//  Approach 2: Map + Array

/**
📥 Input: "aabbbcc"
📤 Output: "bbbaacc" or any valid sorted order by frequency
*/

const str = "aabbbcc";

function rearrangeByFreq2(str) {
  const map = new Map();
  for (let ch of str) map.set(ch, (map.get(ch) || 0) + 1);
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([ch, n]) => ch.repeat(n))
    .join("");
}

const sort = rearrangeByFreq2(str);

console.log(sort);
