function reverseWord(str) {
  const words = str.split(" ");
  console.log(words);
  const reverseWords = words.map((word) => {
    return word.split("").reverse().join("");
  });
  return reverseWords.join(" ");
}
const input = "This is my country";
const output = reverseWord(input);
console.log(output);
