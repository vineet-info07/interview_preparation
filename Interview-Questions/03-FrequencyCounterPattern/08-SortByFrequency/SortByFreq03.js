//  Approach 3: Manual Nested Loops (no built-ins)

/**
📥 Input: "aabbbcc"
📤 Output: "bbbaacc" or any valid sorted order by frequency
*/

const str = "aabbbcc";

function rearrangeByFreq3(str) {
  const freq = {};
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    freq[ch] = freq[ch] ? freq[ch] + 1 : 1;
  }
  const keys = [],
    values = [];
  for (let key in freq) {
    keys.push(key);
    values.push(freq[key]);
  }
  for (let i = 0; i < values.length - 1; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[j] > values[i]) {
        [values[i], values[j]] = [values[j], values[i]];
        [keys[i], keys[j]] = [keys[j], keys[i]];
      }
    }
  }
  let result = "";
  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < values[i]; j++) {
      result += keys[i];
    }
  }
  return result;
}

const sort = rearrangeByFreq3(str);

console.log(sort);
