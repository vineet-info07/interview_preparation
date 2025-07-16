const arr = [1, 2, 5, [4, 6], [3, 7], 9, [14, 10, 12], 11, 13];

function flattenArray() {
  function flatten(arr) {
    return arr.reduce((acc, curr) => {
      if (Array.isArray(curr)) {
        acc = acc.concat(flatten(curr));
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
  }

  const flatData = flatten(arr);
  const max = flatData
    .sort((a, b) => b - a)
    .splice(0, 2)
    .reduce((acc, curr) => acc + curr, 0);

  return max;
}
const flat = flattenArray(arr);
console.log(flat);
