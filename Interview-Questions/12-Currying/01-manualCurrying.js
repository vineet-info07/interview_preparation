function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
const partial = multiply(2); // Returns function (b) => ...
const partial2 = partial(3); // Returns function (c) => ...
console.log(partial2(4));
