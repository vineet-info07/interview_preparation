// Approach 3: Manual Char Count (No built-ins)

const str1 = "listen";
const str2 = "silent";

function isAnagram3(a, b) {
  if (a.length !== b.length) return false;
  const map = {};
  for (let i = 0; i < a.length; i++) {
    const ch = a[i];
    map[ch] = map[ch] ? map[ch] + 1 : 1;
  }
  for (let i = 0; i < b.length; i++) {
    const ch = b[i];
    if (!map[ch]) return false;
    map[ch]--;
  }
  return true;
}

console.log(isAnagram3(str1, str2));
