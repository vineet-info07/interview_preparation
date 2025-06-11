// Approach 2: Reduce

/**
 📥 Input: "the cat and the hat"
 📤 Output: { the:2, cat:1, and:1, hat:1 }
 */

const str = "the cat and the hat";

function wordCount2(str) {
  return str
    .toLowerCase()
    .split(" ")
    .reduce((acc, w) => {
      acc[w] = (acc[w] || 0) + 1;
      return acc;
    }, {});
}

const words = wordCount2(str);
console.log(words);
