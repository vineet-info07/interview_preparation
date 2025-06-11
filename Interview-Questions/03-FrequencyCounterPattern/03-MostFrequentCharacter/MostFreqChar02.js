// Approach 2: Using Map()

const str = "javascript";

// o/p = "a"

function mostFreqChar2(str) {
  const map = new Map();
  for (let ch of str) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  let maxChar = "",
    maxVal = 0;
  map.forEach((v, k) => {
    if (v > maxVal) {
      maxVal = v;
      maxChar = k;
    }
  });
  return maxChar;
}

const freq = mostFreqChar2(str);
console.log(freq);
