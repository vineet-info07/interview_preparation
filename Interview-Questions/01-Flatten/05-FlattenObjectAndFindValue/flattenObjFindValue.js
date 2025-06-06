// function flattenObject(obj) {
//   const result = {};
//   function recurse(obj, currentKey = "") {
//     for (const key in obj) {
//       const value = obj[key];
//       const newKey = currentKey ? `${currentKey}.${key}` : key;

//       if (typeof value === "object" && !Array.isArray(value)) {
//         recurse(value, newKey);
//       } else {
//         result[newKey] = value;
//         console.log(value);
//       }
//     }
//   }
//   recurse(obj);
//   return result;
// }

function flattenObject(obj) {
  const result = {};
  function recurse(curr, path = "") {
    for (let key in curr) {
      const value = curr[key];
      console.log(value);
      const newKey = path ? `${path}.${key}` : key;
      if (typeof value === "object" && !Array.isArray(value)) {
        recurse(value, newKey);
      } else {
        result[newKey] = value;
        console.log(value);
      }
    }
  }
  recurse(obj);
  return result;
}

const data = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: "test",
          },
        },
      },
    },
  },
};

const flattenedData = flattenObject(data);
console.log(flattenedData);
