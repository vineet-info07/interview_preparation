function memoizeAdd() {
  const cache = {};
  return function (a, b) {
    const key = `${a} - ${b}`;
    if (cache[key]) {
      console.log("Result from Cache");
      return cache[key];
    } else {
      console.log("New Result Obtained!");
      const result = a + b;
      cache[key] = result;
      return result;
    }
  };
}

const memoizedAdd = memoizeAdd();

console.log(memoizedAdd(3, 4)); // New result calculated: 7
console.log(memoizedAdd(3, 4)); // Result fetched from cache: 7
console.log(memoizedAdd(5, 6)); // New result calculated: 11
console.log(memoizedAdd(5, 6)); // Result fetched from cache: 11
