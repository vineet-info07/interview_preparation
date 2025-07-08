function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args); // enough arguments
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Usage:
function add(a, b, c) {
  return a + b + c;
}
function sub(a, b, c) {
  return a - b - c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3));
const curriedSub = curry(sub);
console.log(curriedSub(10)(3)(2));
console.log(curriedSub(10, 3)(2));
