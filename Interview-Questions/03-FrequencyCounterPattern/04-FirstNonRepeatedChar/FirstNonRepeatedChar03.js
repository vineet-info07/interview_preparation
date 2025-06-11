// Approach 3: Manual Loop

const str = "aabbccde";

// o/p ="d"

function firstUnique3(str) {
  const freq = {};
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    freq[ch] = freq[ch] ? freq[ch] + 1 : 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) return str[i];
  }
  return null;
}

const freq = firstUnique3(str);
console.log(freq);
