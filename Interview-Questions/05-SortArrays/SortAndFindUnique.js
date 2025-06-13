// Arr1=[1,2,5,4] and arr2=[2,1,4,5,6,7]. concat both the array. Avoid the duplicate elements.sort it desc order

const arr1 = [1, 2, 3, 4];

const arr2 = [2, 1, 4, 5, 6, 7];

function sortAndRemoveDuplicate(arr1, arr2) {
  const commonArray = [];
  for (let i = 0; i < arr1.length; i++) {
    commonArray.push(arr1[i]);
    console.log(commonArray);
  }
  for (let j = 0; j < arr2.length; j++) {
    commonArray.push(arr2[j]);
  }
  const removeDuplicate = commonArray.filter(
    (element, index) => commonArray.indexOf(element) === index
  );

  return removeDuplicate.sort((a, b) => b - a);
}

const data = sortAndRemoveDuplicate(arr1, arr2);
console.log(data);
