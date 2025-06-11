// Approach 1: Map + Max Track

const str = "javascript";

// o/p = "a"

function mostFreqChar1(str) {
  const freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  return Object.entries(freq).reduce((max, curr) =>
    curr[1] > max[1] ? curr : max
  )[0];
}

const freq = mostFreqChar1(str);
console.log(freq);
