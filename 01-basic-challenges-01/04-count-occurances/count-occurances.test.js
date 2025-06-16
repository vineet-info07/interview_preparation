const countOccurrences = require("./count-occurances");

test("Count Occurrences of a Character", () => {
  expect(countOccurrences("hello", "l")).toBe(2);
  expect(countOccurrences("programming", "m")).toBe(2);
  expect(countOccurrences("banana", "a")).toBe(3);
});
