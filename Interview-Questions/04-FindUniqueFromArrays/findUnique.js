// find the unique between two arrays

const a = [23, 45, 11, 67, 12, 89, 20];
const b = [12, 20, 89, 45, 23, 67];

const uniqueInA = a.filter((element) => !b.includes(element));
console.log(uniqueInA);

const uniqueInB = b.filter((element) => !a.includes(element));
console.log(uniqueInB);

const uniqueElements = [...uniqueInA, ...uniqueInB];

console.log(uniqueElements); // Output: [11]
