const arr1 = [1, 2, 3, 4, 4, 5, 5];

function duplicatesWithCounts(arr) {
  const counts = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const countValues = Object.entries(counts);
  return countValues
    .filter(([value, count]) => count > 1)
    .map(([value, count]) => ({ value: Number(value), count }));
}

const countValue = duplicatesWithCounts(arr1);

console.log("Duplicate values with counts:", countValue);
