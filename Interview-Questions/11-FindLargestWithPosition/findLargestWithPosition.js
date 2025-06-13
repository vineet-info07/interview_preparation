const arr1 = [33, 11, 43, 55, 677, 11, 33];
const arr2 = [23, 11, 53, 65, 7, 121, 33];

/* write a function which will take position as input return the number and its occurrences
don't use inbuilt operations / functions  (eg. spread operator, sort, filter etc)
for example : if I passed 1 to function it should return me 1st largest number and its occurrence
if I passed 3 to function it should return me 3rd largest number and its occurrence */

function findKthLargest(arr1, arr2, k) {
  // Combine the arrays manually
  const combinedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    combinedArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    combinedArray.push(arr2[i]);
  }

  // Manual sorting of the combined array
  for (let i = 0; i < combinedArray.length; i++) {
    for (let j = i + 1; j < combinedArray.length; j++) {
      if (combinedArray[i] < combinedArray[j]) {
        const temp = combinedArray[i];
        combinedArray[i] = combinedArray[j];
        combinedArray[j] = temp;
      }
    }
  }

  // Find the k-th largest number
  let currentPos = 1;
  let kthLargest;
  for (let i = 0; i < combinedArray.length; i++) {
    if (i === 0 || combinedArray[i] !== combinedArray[i - 1]) {
      if (currentPos === k) {
        kthLargest = combinedArray[i];
        break;
      }
      currentPos++;
    }
  }

  // Count occurrences of the k-th largest number
  let count = 0;
  for (let i = 0; i < combinedArray.length; i++) {
    if (combinedArray[i] === kthLargest) {
      count++;
    }
  }

  return { number: kthLargest, occurrences: count };
}

console.log(findKthLargest(arr1, arr2, 1)); // { number: 677, occurrences: 1 }
console.log(findKthLargest(arr1, arr2, 7)); // { number: 65, occurrences: 1 }
