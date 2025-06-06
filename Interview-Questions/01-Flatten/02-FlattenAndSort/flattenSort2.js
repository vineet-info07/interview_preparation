const arr = [1, 2, 5, [4, 6], [3, 7], 9, [14, 10, 12], 11, 13];

function flatten(arr) {
  const newArray = arr.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    []
  );
  const sortedArray = [...newArray].sort((a, b) => a - b);
  return sortedArray;
}

console.log(flatten(arr));
