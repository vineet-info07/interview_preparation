// Approach 3: Manual Min-Max Extraction (No Sort)
/**
📥 Input: "aaabbccccd" and k = 2
📤 Output: ['c', 'a']
*/

const str = "aaabbccccd";

function topKFreq3(str, k) {
  const freq = {},
    res = [];
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    freq[ch] = freq[ch] ? freq[ch] + 1 : 1;
  }
  for (let i = 0; i < k; i++) {
    let max = 0,
      maxChar = "";
    for (let key in freq) {
      if (freq[key] > max) {
        max = freq[key];
        maxChar = key;
      }
    }
    res.push(maxChar);
    delete freq[maxChar];
  }
  return res;
}

const kChar = topKFreq3(str);
console.log(kChar);
