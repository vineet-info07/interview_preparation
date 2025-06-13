const array = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" },
];

function removeDuplicates(arr) {
  const map = new Map();
  arr.forEach((element) => map.set(element.id, element));
  return Array.from(map.values());
}
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray);
