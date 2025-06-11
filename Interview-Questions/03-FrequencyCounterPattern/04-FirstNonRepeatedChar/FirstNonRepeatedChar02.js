// Approach 2: Map with Entries

const str = "aabbccde";

// o/p ="d"

function firstUnique2(str) {
  const map = new Map();
  for (let ch of str) map.set(ch, (map.get(ch) || 0) + 1);
  for (let ch of str) if (map.get(ch) === 1) return ch;
  return null;
}

const freq = firstUnique2(str);
console.log(freq);
