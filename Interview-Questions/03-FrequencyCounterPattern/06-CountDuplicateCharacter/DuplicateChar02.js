// Approach 2: Map + Reduce

/**
 Input: "programming"
Output: { r: 2, g: 2, m: 2 }
 */

const str = "programming";

function countDuplicates2(str) {
  const map = new Map();
  for (let ch of str) map.set(ch, (map.get(ch) || 0) + 1);
  const result = {};
  for (let [k, v] of map) if (v > 1) result[k] = v;
  return result;
}

const dupChar = countDuplicates2(str);
console.log(dupChar);
