const arr = [1, 2, 3, [4, 5], 6, 7, [[8, 9], 10, [11, 12, 13]], 14];

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

const flat = flatten(arr);
console.log(flat);
