const array = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" },
];

function removeDuplicate(arr) {
  const newArray = arr.filter(
    (obj, index, self) =>
      index === self.findIndex((t) => t.id === obj.id && t.name === obj.name)
  );
  return newArray;
}

const uniqueArray = removeDuplicate(array);
console.log(uniqueArray);
