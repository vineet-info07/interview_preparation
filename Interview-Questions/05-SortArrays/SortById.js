const arr = [
  { id: 2, name: "test2" },
  { id: 6, name: "test6" },
  { id: 1, name: "test1" },
  { id: 4, name: "test4" },
  { id: 3, name: "test3" },
];

// Sort the array based on the id property in ascending order
arr.sort((a, b) => a.id - b.id);

console.log(arr);
