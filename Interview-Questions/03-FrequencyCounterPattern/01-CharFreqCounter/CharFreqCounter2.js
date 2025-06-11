// Approach 2: Object + for...of
// 2.1

const str = "Hello WorLd";
function calculateFrequency(str) {
  const frequency = {};
  const lowerStr = str.toLowerCase();
  for (let char of lowerStr) {
    char !== " "
      ? frequency[char]
        ? frequency[char]++
        : (frequency[char] = 1)
      : "";
  }
  return frequency;
}

const charFreq = calculateFrequency(str);
console.log(charFreq);

// 2.2

function charFrequency2(str) {
  const freq = {};
  for (let char of str.toLowerCase()) {
    if (char === " ") continue;
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

const char = charFrequency2(str);
console.log(char);
