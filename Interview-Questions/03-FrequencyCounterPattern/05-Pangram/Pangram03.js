// Approach 3: Manual Char Count (no built-ins)

const str = "The quick brown fox jumps over the lazy dog";

function isPangram3(str) {
  const seen = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    if (ch >= "a" && ch <= "z") seen[ch] = true;
  }
  let count = 0;
  for (let key in seen) count++;
  return count === 26;
}

const pangram = isPangram3(str);
console.log(pangram);
