{
  /** 
function findSecondHighest(arr) {
  let highest = arr[0];
  let secondHighest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      secondHighest = highest;
      highest = arr[i];
    } else if (arr[i] > secondHighest && arr[i] < highest) {
      secondHighest = arr[i];
    }
  }
  return secondHighest;
}

*/
}

function findSecondHighest(arr) {
  let highest = arr[0];
  let secondHighest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      secondHighest = highest;
      highest = arr[i];
    } else if (arr[i] > secondHighest && arr[i] < highest) {
      secondHighest = arr[i];
    }
  }
  return secondHighest;
}

const array = [10, 20, 40, 30, 60, 5, 15, 35, 90, 80];
console.log(findSecondHighest(array));

// const numbers = [10, 5, 20, 8, 15];
// const secondHighest = numbers.reduce(
//   (acc, curr) => {
//     if (curr > acc.highest) {
//       acc.secondHighest = acc.highest;
//       acc.highest = curr;
//     } else if (curr > acc.secondHighest && curr !== acc.highest) {
//       acc.secondHighest = curr;
//     }
//     return acc;
//   },
//   { highest: -Infinity, secondHighest: -Infinity }
// ).secondHighest;

// console.log(secondHighest); // Output: 15
