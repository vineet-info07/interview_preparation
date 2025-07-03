function arrayIntersection(arr1, arr2) {
  const intersectionArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersectionArray.includes(arr1[i])) {
      intersectionArray.push(arr1[i]);
    }
  }
  return intersectionArray;
}

module.exports = arrayIntersection;
