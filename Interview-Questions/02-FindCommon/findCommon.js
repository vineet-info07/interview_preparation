{
  /**
  Given two strings x, y, find the common characters between the strings:
  Example 1:
  x = "monk", y = "stonks"
  output: ["o","n","k"]	
  Example 2: 
  x = "character", y = "farceus"
  output: ["a", "r", "c", "e"]
  */
}

function findCommon(x, y) {
  const common = [];
  for (let i = 0; i <= x.length; i++) {
    const char = x[i];
    if (y.includes(char) && !common.includes(char)) {
      common.push(char);
    }
  }

  return common;
}

const x = "monk";
const y = "stonks";

const a = "character";
const b = "farceus";

console.log(findCommon(a, b));

console.log(findCommon(x, y));
