// Approach 2: Map + Sort

/**
📥 Input: "aaabbccccd" and k = 2
📤 Output: ['c', 'a']
*/

const str = "aaabbccccd";

function topKFreq2(str, k) {
  const map = new Map();
  for (let ch of str) map.set(ch, (map.get(ch) || 0) + 1);
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([ch]) => ch);
}

const kChar = topKFreq2(str);
console.log(kChar);
