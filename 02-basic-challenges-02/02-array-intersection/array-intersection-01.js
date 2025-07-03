function arrayIntersection01(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersectionArray = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      intersectionArray.push(num);
    }
  }
  return intersectionArray;
}

module.exports = arrayIntersection01;
