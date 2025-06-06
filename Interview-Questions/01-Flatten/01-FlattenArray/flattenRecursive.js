const arr = [1, 2, 3, [4, 5], 6, 7, [[8, 9], 10, [11, 12, 13]], 14];
const flatten1 = (a) =>
  a.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten1(val) : val),
    []
  );

console.log(flatten1(arr));
