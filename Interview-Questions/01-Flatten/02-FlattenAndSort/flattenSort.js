const arr = [1, 2, 5, [4, 6], [3, 7], 9, [14, 10, 12], 11, 13];

function flattenArray() {
  function flatten(arr) {
    return arr.reduce((acc, curr) => {
      Array.isArray(curr) ? (acc = acc.concat(flatten(curr))) : acc.push(curr);
      return acc;
    }, []);
  }
  const flatData = flatten(arr);
  return flatData.sort((a, b) => a - b);
}

const flat = flattenArray();

console.log(flat);
