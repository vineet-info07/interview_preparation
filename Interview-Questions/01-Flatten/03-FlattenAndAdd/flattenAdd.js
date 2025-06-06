const arr = [1, 2, 5, [4, 6], [3, 7], 9, [14, 10, 12], 11, 13];

function findMax() {
  function flatten(arr) {
    return arr.reduce(
      (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
      []
    );
  }

  const data = flatten(arr);
  const max = data
    .sort((a, b) => b - a)
    .splice(0, 2)
    .reduce((acc, curr) => acc + curr, 0);
  return max;
}

console.log(findMax());
