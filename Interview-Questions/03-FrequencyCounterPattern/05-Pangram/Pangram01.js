//Approach 1: Frequency Set

const str = "The quick brown fox jumps over the lazy dog";

function isPangram1(str) {
  const set = new Set();
  for (let ch of str.toLowerCase()) {
    if (ch >= "a" && ch <= "z") set.add(ch);
  }
  return set.size === 26;
}

const pangram = isPangram1(str);
console.log(pangram);
