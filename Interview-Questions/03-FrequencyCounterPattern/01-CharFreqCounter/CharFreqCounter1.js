// Approach 1: Manual (No built-ins)

function charFrequency1(str) {
  const freq = {};
  for (let i = 0; i < str.length; i++) {
    let code = str[i].toLowerCase();
    if (code === " ") continue;
    if (freq[code]) {
      freq[code]++;
    } else {
      freq[code] = 1;
    }
  }
  return freq;
}

const charFreq1 = charFrequency1(str);
console.log(charFreq1);
