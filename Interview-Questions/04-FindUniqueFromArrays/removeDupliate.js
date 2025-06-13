const arr = [1, 2, 3, 1, 2, 3, 4];

const arr2 = ["orange", "apple", "banana", "leman", "apple", "banana"];

{
  /**Using Set Method */
}
// function removeDuplicate(arr) {
//   return [...new Set(arr)];
// }

{
  /**Using Filter Method */
}

// function removeDuplicate(arr) {
//   return arr.filter((element, index) => arr.indexOf(element) === index);
// }

// console.log(removeDuplicate(arr));
// console.log(removeDuplicate(arr2));

{
  /**Using forEach */
}

// function removeDuplicate(arr) {
//   let unique = [];
//   arr.forEach((element) => {
//     if (!unique.includes(element)) {
//       unique = [...unique, element];
//     }
//   });
//   return unique;
// }

{
  /** Reduce */
}

{
  /** 
function removeDuplicate(arr) {
  return arr.reduce(
    (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
    []
  );
}
*/
}

// function removeDuplicate(arr) {
//   let unique = arr.reduce((a, b) => {
//     if (a.indexOf(b) < 0) a = [...a, b];
//     return a;
//   }, []);
//   return unique;
// }

// console.log(removeDuplicate(arr2));

// console.log(removeDuplicate(arr));

// Function to compute the factorial of a number using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Example usage: Compute the factorial of 5
let number = 5;
console.log("Factorial of " + number + " is " + factorial(number));
