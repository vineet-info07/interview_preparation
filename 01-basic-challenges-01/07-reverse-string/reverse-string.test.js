const reverseString = require("./reverse-string");
const reverseString01 = require("./reverse-string01");

test("", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
  expect(reverseString01("JavaScript")).toBe("tpircSavaJ");
  expect(reverseString01("12345")).toBe("54321");
});
