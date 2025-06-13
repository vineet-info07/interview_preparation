console.log(555 == "555");
console.log(555 === "555");
console.log(null == undefined);
console.log(null === undefined);
console.log("2" + 1 + 2);
console.log(2 + 1 + "2");

// ************************************************

function sleep(ms) {
  return new Promise((resolve) => {
    throw new Error("....");
    setTimeout(resolve, ms);
  });
}

console.log("Right Away");

sleep(1000)
  .then(() => {
    console.log("After 1s");
  })
  .then(() => sleep(1000))
  .then(() => {
    console.log("After 2s");
  })
  .catch(() => {
    console.log("Rejected");
  });

console.log("Right Away");
// *********************************************************

const obj = {
  1: "a",
  1: "b",
  [1]: "c",
};

console.log(obj["1"]);

// *********************************************************

// What's the console output?

let text = "abcde";
text[1] = "z";
console.log(text);
// *********************************************************
// What's the console output?
const arr = [1, 2, 3];
arr.length = 0;
console.log(arr);
// *********************************************************
// what's the console output?

/**
console.log(NaN === NaN);
console.log({ a: 1 } === { a: 1 });
console.log(1 == "1");
console.log([] === []);
*/
// *********************************************************
// What's the console output?

var variable = 10;
(() => {
  variable2 = 100;
  console.log(variable);
  console.log(variable2);
  variable = 20;
  var variable2 = 50;
  console.log(variable);
})();
console.log(variable);
var variable = 30;
// *********************************************************
// console.log(variable2);
// What will be the typeof below?
console.log(typeof NaN);
console.log(typeof {});
console.log(typeof []);
console.log(typeof class JavaScript {});
console.log(typeof null);
console.log(typeof typeof [1, 2, 3]);
// *********************************************************
// What's the console output?

const obj1 = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

console.log(obj1.getX.call(obj1));
const getX1 = obj1.getX;
console.log(getX1());

// *********************************************************

const User = {
  name: "vk",
  getDetails: function (city) {
    console.log(`Name: ${this.name} , City: ${city}`);
  },
};

// const dataValue = User.getDetails;
// dataValue();
const data = User.getDetails.bind(User);
data("Wardha");

User.getDetails.call(User, "Pune");
User.getDetails.apply(User, ["Hyderabad"]);
// *********************************************************

function sum(a = 11, b = 6) {
  return a + b;
}

// A
console.log(sum(11, 2)); //13
// B
console.log(sum(3)); //9
// C
console.log(sum(undefined, 20)); //31
// D
console.log(sum());
// *********************************************************

var name = "John";

var newUser = {
  name: "William",
};

var user = {
  name: "Taylor",
  greet() {
    console.log(`Hello, my name is ${this.name}`);

    const fn1 = function () {
      console.log(`Hello, my name is ${this.name}`);
    };
    fn1();

    const fn2 = function () {
      console.log(`Hello, my name is ${this.name}`);
    };
    fn2.call(user);

    const fn3 = () => {
      console.log(`Hello, my name is ${this.name}`);
    };
    fn3();

    const fn4 = () => {
      console.log(`Hello, my name is ${this.name}`);
    };
    fn4.call(newUser);

    function fn5() {
      console.log(`Hello,  my name is ${this.name}`);
    }
    fn5();
    fn5.call(newUser);
    fn5.call(user);
  },
};

user.greet();

//*************************************************/
//One Network
var ageGroup = { 30: "Children", 100: "Very Old" };

// console.log(ageGroup.30);

// Arr1=[1,2,5,4] and arr2=[2,1,4,5,6,7]. concat both the array. Avoid the duplicate elements.sort it desc order

var person = { name: "Sachin" };

var anotherPerson = person;

person.name = "Ramesh";

console.log(anotherPerson.name);

console.log(person.name);

var s = "5";

var a = s * 1;

var b = +s;

console.log(typeof s);

console.log(typeof a);

console.log(typeof b);

function test() {
  type = "Red";

  version = 5.0;
}

var childtest = new test();

console.log(childtest.type);

// solution:

function test() {
  this.type = "Red";

  this.version = 5.0;
}

var childtest = new test();

console.log(childtest.type);

// border : 10px 20px;
// border : 10px 20px 30px;

function concatenateAndRemoveDuplicates(arr1, arr2) {
  let concatenatedArray = [];

  // Append elements of the first array to the concatenatedArray
  for (let i = 0; i < arr1.length; i++) {
    concatenatedArray.push(arr1[i]);
  }

  // Append elements of the second array to the concatenatedArray
  for (let i = 0; i < arr2.length; i++) {
    concatenatedArray.push(arr2[i]);
  }

  // Remove duplicates
  // let uniqueArray = [];
  // for (let i = 0; i < concatenatedArray.length; i++) {
  //   let isDuplicate = false;
  //   for (let j = 0; j < uniqueArray.length; j++) {
  //     if (concatenatedArray[i] === uniqueArray[j]) {
  //       isDuplicate = true;
  //       break;
  //     }
  //   }
  //   if (!isDuplicate) {
  //     uniqueArray.push(concatenatedArray[i]);
  //   }

  let unique = concatenatedArray.reduce(
    (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
    []
  );

  return unique;
}

// Example usage
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let resultArray = concatenateAndRemoveDuplicates(array1, array2);
console.log(resultArray); // Output: [1, 2, 3, 4, 5, 6]

// function xyz() {
//   console.log(a);
//   var a = 10;
//   console.log(b);
//   let b = 20;
// }

// xyz();

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
}

function add(a, b) {
  return a + b;
}

const addValues = add(1, "2");
console.log(addValues);

{
  /** ******************************************* */
}
{
  /** 
  let obj = { name: "sohan" };
  let newObj = { ...obj }; // This creates a shallow copy of obj into newObj

  newObj.name = "Ashok"; // Modifying newObj's name property

  console.log(obj); // Output: { name: 'sohan' }
  console.log(newObj); // Output: { name: 'Ashok' }
*/
}
// ***********************************************
// ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Dynamic Colors</title>
//   <style>
//     .color-box {
//       width: 100px;
//       height: 100px;
//       margin: 10px;
//     }
//   </style>
// </head>
// <body>
//   <div id="app"></div>
// <script>
// Define your colors
const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];

// Get the app container
const app = document.getElementById("app");

// Create div elements for each color and apply styles
colors.forEach((color) => {
  const colorBox = document.createElement("div");
  colorBox.className = "color-box";
  colorBox.style.backgroundColor = color;
  app.appendChild(colorBox);
});
// </script>
// </body>
// </html>

// ************************************

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

// 10,10,10,10,10

let data = { name: "Interviwer" };
console.log(delete data.name);

console.log(10 - -10);

/* var a 
console.log(a)

a=10

(aysnc function any(){})

*/
function x(a) {
  return function y(b) {
    return a + b;
  };
}

console.log(x(10)(20));

// const array = [1, 2, 3, 1, 2, 3, 4];

// function unqiueData(arr) {
//   const newData = arr.filter(
//     (element, index) => arr.indexOf(element) === index
//   );
//   return newData;
// }

// console.log(uniqueData(array));
