// Approach 1: Frequency Counter + Loop

const str = "aabbccde";

// o/p ="d"

function firstUnique1(str) {
  const freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  for (let ch of str) if (freq[ch] === 1) return ch;
  return null;
}

const freq = firstUnique1(str);
console.log(freq);
