// Approach 1: Frequency Object Compare

const str1 = "listen";
const str2 = "silent";

function isAnagram1(a, b) {
  if (a.length !== b.length) return false;
  const count = {};
  for (let ch of a) count[ch] = (count[ch] || 0) + 1;
  for (let ch of b) {
    if (!count[ch]) return false;
    count[ch]--;
  }
  return true;
}

console.log(isAnagram1(str1, str2));
