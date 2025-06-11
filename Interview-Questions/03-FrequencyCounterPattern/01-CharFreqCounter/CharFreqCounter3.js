//  Approach 3: Array.reduce() + Spread

const str = "Hello WorLd";

function calculateFrequency3(str) {
  const newStr = str.toLowerCase().split("");
  console.log(newStr);
  return newStr.reduce((acc, curr) => {
    if (curr !== " ") acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}
const data = calculateFrequency3(str);
console.log(data);

function charFrequency(str) {
  return [...str.toLowerCase()].reduce((acc, char) => {
    if (char !== " ") acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

const freq = charFrequency(str);
console.log(freq);
