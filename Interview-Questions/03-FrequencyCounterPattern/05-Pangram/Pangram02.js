// Approach 2: Using reduce() + Set

const str = "The quick brown fox jumps over the lazy dog";

function isPangram2(str) {
  return (
    [...str.toLowerCase()].reduce((set, ch) => {
      if (ch >= "a" && ch <= "z") set.add(ch);
      return set;
    }, new Set()).size === 26
  );
}

const pangram = isPangram2(str);
console.log(pangram);
