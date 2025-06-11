// Approach 3: Manual Tokenizer (no split)

/**
 📥 Input: "the cat and the hat"
 📤 Output: { the:2, cat:1, and:1, hat:1 }
 */

const str = "the cat and the hat";

function wordCount3(str) {
  const freq = {};
  let word = "";
  for (let i = 0; i <= str.length; i++) {
    const ch = str[i] || " ";
    if (ch !== " ") {
      word += ch.toLowerCase();
    } else if (word.length) {
      freq[word] = freq[word] ? freq[word] + 1 : 1;
      word = "";
    }
  }
  return freq;
}

const words = wordCount3(str);
console.log(words);
