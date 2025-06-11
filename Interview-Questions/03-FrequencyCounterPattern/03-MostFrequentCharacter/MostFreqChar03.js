// Approach 3: No Built-Ins

const str = "javascript";

// o/p = "a"

function mostFreqChar3(str) {
  const freq = {},
    arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    const ch = arr[i];
    freq[ch] = freq[ch] ? freq[ch] + 1 : 1;
  }
  let max = 0,
    char = "";
  for (let key in freq) {
    if (freq[key] > max) {
      max = freq[key];
      char = key;
    }
  }
  return char;
}

const freq = mostFreqChar3(str);
console.log(freq);
