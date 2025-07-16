Here's a curated list of most important JavaScript topics you should master:

#### 🧠 1. Execution Context & Scope

Global / Function / Block scope

Lexical scoping

Scope chain

Temporal Dead Zone (TDZ)

var vs let vs const

#### 🔁 2. Closures

Function factories (returning functions)

Memory efficiency via closures

Private variables using closures

Closures in loops (setTimeout example)

#### 🔄 3. Asynchronous JS

Event loop

Callback queue vs microtask queue

setTimeout, setImmediate, process.nextTick

Promises, async/await, chaining

Promise.all, Promise.race, Promise.allSettled

Debounce vs Throttle

#### 🔀 4. Hoisting & Temporal Dead Zone

Function and variable hoisting

Let/const in TDZ

Function expressions vs declarations

#### 🧱 5. Objects & Prototypes

Object creation patterns

Object.create, Object.assign, spread vs rest

Inheritance via prototypes

**proto** vs prototype

Shadowing & property lookup chain

#### 🧩 6. this Keyword

this in global, function, arrow function, class

How this behaves in setTimeout, event handlers

call, apply, bind

#### 🧮 7. Functional Programming Concepts

Pure functions

Immutability

Currying, partial application

Composition (compose, pipe)

Higher-order functions (map, filter, reduce, etc.)

#### 🧱 8. Memory Management

Garbage collection

Leaks via closures, global refs, DOM refs

WeakMap / WeakSet use cases

#### ⚙️ 9. Event Delegation & Bubbling

stopPropagation, preventDefault

Capture vs bubble phase

Custom events

#### 📦 10. Module Systems

CommonJS vs ESM

import/export vs require

Tree shaking

Dynamic imports

#### 🎭 11. Error Handling & Debugging

try/catch/finally

Error objects and custom errors

Stack traces

Global error listeners (window.onerror, unhandledrejection)

#### 🧵 12. Array & Object Utilities

Deep vs shallow copy

.map, .reduce, .flatMap, .find, .some, .every

Destructuring

Spread/rest operations

Object iteration (entries, keys, values)

#### 🧰 13. Advanced Patterns

Singleton

Factory

Module pattern

Observer

Strategy pattern

#### ⏱️ 14. Timers & Scheduling

setTimeout, setInterval

Recursive setTimeout vs setInterval

Debounce vs Throttle (Lodash/handwritten)

#### ⚛️ 15. Type Coercion & Equality

== vs ===

Truthy / Falsy

Explicit vs Implicit coercion

Object vs primitive coercion

#### 🧮 16. Data Structures in JS

Set, Map, WeakMap, WeakSet

When to use which

Comparing with arrays and objects

#### 📡 17. Network Requests

Fetch API

AbortController

JSON handling

File uploads (FormData)

CORS, preflight, headers

#### 🔐 18. Security Concepts

XSS and sanitization

CSRF tokens in fetch

CORS policy

Safe JSON parsing

#### 🧪 19. Testing Concepts (Optional for Core JS, Essential for Apps)

Unit vs Integration testing

Jest, Vitest

Spying on functions

Mocking network requests

#### 🧠 20. Interview-Centric Topics

Flattening nested arrays

Deep cloning vs shallow cloning

Building custom bind, map, or reduce

Custom debounce/throttle

Implementing a Promise polyfill

Bonus: ES6+ Features You Must Know
Arrow functions, default params

Template literals

Destructuring

class, super, extends

Optional chaining (?.)

Nullish coalescing (??)

Array.flat(), flatMap()

Object.entries(), Object.fromEntries()

---

🧠 1. Execution Context & Scope (20 Questions)
🔸 Basics
What will this print and why?

js
Copy
Edit
var a = 10;
function test() {
console.log(a);
var a = 5;
}
test();
Output: undefined (due to hoisting)

What's the output?

js
Copy
Edit
let x = 10;
{
let x = 20;
console.log(x);
}
console.log(x);
Write a function that uses function scope to protect a variable.

What is the output and why?

js
Copy
Edit
for (var i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 0);
}
Fix the above using let or an IIFE.

🔸 Intermediate
Create a function that returns another function that remembers its outer variable.

js
Copy
Edit
function createCounter() { /_ ... _/ }
const counter = createCounter();
counter(); // 1
counter(); // 2
Why does this throw an error?

js
Copy
Edit
console.log(x);
let x = 5;
Implement a function where variables declared with var leak outside of blocks, but let doesn’t.

Demonstrate lexical scoping with nested functions.

What is the output?

js
Copy
Edit
function outer() {
var count = 0;
function inner() {
count++;
console.log(count);
}
return inner;
}

const counter1 = outer();
const counter2 = outer();

counter1(); // ?
counter2(); // ?
🔸 Advanced
Implement a function that mimics block scoping for var using closures.

Simulate a private variable in a module using scope.

What is the output?

js
Copy
Edit
var x = 1;
function foo() {
console.log(x);
var x = 2;
}
foo();
What's wrong with this code? Fix the scoping issue.

js
Copy
Edit
for (var i = 0; i < 5; i++) {
setTimeout(() => console.log(i), 1000);
}
What are the different types of scope in JavaScript? Give code examples.

🔁 2. Closures (20 Questions)
🔸 Basics
What is a closure in JavaScript? Show an example.

Implement a function that creates a private counter using closures.

Does this return a closure?

js
Copy
Edit
function example() {
let message = 'hello';
return function () {
return message;
};
}
Create a function once(fn) that runs the function only once.

What’s the output?

js
Copy
Edit
function test() {
var msg = 'test';
return function () {
console.log(msg);
};
}
const fn = test();
fn(); // ?
🔸 Intermediate
Fix this closure inside a loop:

js
Copy
Edit
var funcs = [];
for (var i = 0; i < 3; i++) {
funcs.push(() => console.log(i));
}
funcs[0]();
Build a memoization function using closure.

What is the output?

js
Copy
Edit
const add = (a) => (b) => a + b;
const add5 = add(5);
console.log(add5(3));
Write a timer that logs after n seconds using closures.

Create a debounce function using closures.

🔸 Advanced
Explain how closures can lead to memory leaks.

Build a pub-sub system using closures.

Simulate private class members using closures (no #).

Explain how setTimeout + closure can delay variable access.

Explain the following output:

js
Copy
Edit
let x = 5;
function outer() {
let x = 10;
return function inner() {
console.log(x);
};
}
const fn = outer();
fn(); // ?
Would you like me to continue with:

✅ 3. Asynchronous JavaScript (Promises, Event Loop)
✅ 4. this, bind, call, apply
✅ 5. Functional Patterns (Currying, Composition)

---

🔄 3. Asynchronous JavaScript (Event Loop, Promises, async/await) — 20 Interview Challenges
🔸 Basics
What’s the output? Why?

js
Copy
Edit
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
Create a delay function using Promise.

js
Copy
Edit
const wait = (ms) => new Promise((res) => setTimeout(res, ms));
What does Promise.resolve() do?

Write a function that returns a Promise which rejects if a number is odd.

Demonstrate async/await with try/catch.

🔸 Intermediate
Simulate sequential API calls using async/await.

Convert this code to async/await:

js
Copy
Edit
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data));
What’s the output and why?

js
Copy
Edit
async function foo() {
console.log(1);
await Promise.resolve();
console.log(2);
}
foo();
console.log(3);
Implement a retry mechanism using Promises.

Implement a sleep(ms) function with async/await.

🔸 Advanced
Build a Promise.allLimit() function (only 2 promises run at a time).

Implement your own Promise.all()

Explain the difference between microtask and macrotask queues with example.

How would you cancel an in-progress fetch request using AbortController?

What's the output?

js
Copy
Edit
setTimeout(() => console.log('setTimeout'), 0);
Promise.resolve().then(() => console.log('promise'));
🔸 Real-world
Throttle async form submission.

Build an async queue (tasks run sequentially).

Create a function raceWithTimeout(promise, ms) that rejects if promise doesn't resolve in ms.

How does async/await handle errors compared to Promises? Show with examples.

Explain how the event loop handles this code:

js
Copy
Edit
async function foo() {
console.log('foo');
await bar();
console.log('after await');
}
function bar() {
console.log('bar');
}
foo();
🔁 4. this, bind, call, apply — 15 Questions
🔸 Basics
What is this in JavaScript? Show 3 different contexts.

Fix the context of this in this code:

js
Copy
Edit
const obj = {
name: 'React',
getName: function () {
setTimeout(function () {
console.log(this.name);
}, 100);
},
};
obj.getName();
Use arrow function to fix the above.

🔸 Intermediate
Use .bind() to permanently bind a method to an object.

Demonstrate the difference between .call(), .apply(), and .bind()

What will this log?

js
Copy
Edit
const person = {
name: 'Alice',
greet: function () {
return `Hi, ${this.name}`;
},
};
const greet = person.greet;
console.log(greet());
🔸 Advanced
Implement a polyfill for .bind()

How does this behave inside a class?

How does this behave in arrow functions inside object methods?

Write a method that uses .apply() to sum an array.

What’s the output?

js
Copy
Edit
const obj = {
a: 5,
getA: function () {
return this.a;
},
};
const detached = obj.getA;
console.log(detached()); // undefined
Fix the above using .bind()

Use .call() to borrow a method from one object to another.

Explain how this differs in arrow vs regular function with example.

When does this become undefined in strict mode

---

🧩 5. Functional Programming in JavaScript
(Currying, Composition, Memoization, Immutability, Pure Functions)
20 Interview Coding Questions

🔸 Basics
Implement a curried function sum(a)(b)(c) → returns a + b + c.

What’s the difference between currying and partial application? Give a coded example.

Write a function multiply(a, b) and convert it to a curried version.

Implement a function once(fn) — runs fn only once.

What is a pure function? Convert this to a pure function:

js
Copy
Edit
let count = 0;
function increment() {
count++;
return count;
}
🔸 Intermediate
Create a compose(f, g)(x) function that returns f(g(x)).

Create a pipe(...fns) function (left-to-right function chaining).

Write a function that memoizes the result of a factorial.

Implement debounce(fn, delay) using closures.

Convert this into a composable pipeline:

js
Copy
Edit
const result = wrapInDiv(trim(toLowerCase(' HELLO ')));
🔸 Advanced
Write a function curry(fn) that curries any n-arg function.

Implement a generic memoize(fn) with Map.

How can you ensure immutability when updating nested objects? Write a reusable function.

Create a function that generates partially applied functions using .bind().

Create a delayLog(msg, delay) function using curried Promises.

🔸 Real-world Alignment
Use currying to create an i18n (translation) helper.

Write a Redux-style reducer that ensures purity.

Build a function updateObject(path)(value)(obj) for safe nested updates.

Why are higher-order functions important in React? Give example with a HOC.

Write a higher-order logger that wraps any function and logs inputs/outputs.

🧬 6. Prototypes & Object-Oriented JavaScript (OOP)
15 Interview Coding Questions

🔸 Basics
What is the difference between **proto** and prototype?

Create a constructor function for a User with name and greet method.

Use .prototype to add a method to all instances of a constructor.

What’s the difference between class and function constructors in JS?

What’s the output and why?

js
Copy
Edit
function Animal() {}
Animal.prototype.sound = 'Roar';
const tiger = new Animal();
console.log(tiger.sound); // ?
🔸 Intermediate
Simulate classical inheritance using Object.create.

Create two constructor functions (Employee, Manager) where Manager inherits from Employee.

Demonstrate prototype chain lookup.

Use Object.setPrototypeOf to change an object’s prototype.

What is the output?

js
Copy
Edit
const obj = {};
Object.setPrototypeOf(obj, Array.prototype);
console.log(obj.map); // ?
🔸 Advanced
Implement instanceof operator manually.

Create a class that uses private fields via closures.

Demonstrate how the prototype chain works in an ES6 class.

Create your own Object.create() polyfill.

What are pitfalls of modifying native prototypes like Array.prototype?

---

🧠 7. Memory Management, WeakMap/Set, and Closures in Large Apps
15 High-Level Interview Questions

🔸 Basics
What causes memory leaks in JavaScript? List 4 common scenarios.

What is garbage collection in JavaScript and when does it happen?

How does closure affect memory usage? Show an example with a leak.

Why are global variables dangerous for memory management?

How do DOM references inside closures cause leaks?

🔸 Intermediate
Use WeakMap to store metadata about DOM elements without preventing GC.

js
Copy
Edit
const metaStore = new WeakMap();
const button = document.getElementById("submit");
metaStore.set(button, { clicked: true });
Create a cache using WeakMap where keys are objects.

Explain the difference: Map vs WeakMap and Set vs WeakSet (with code).

How do event listeners cause memory leaks? How can you clean them up?

Use IntersectionObserver and WeakMap to lazily load images with metadata.

🔸 Advanced
What is a detached DOM node and how does it leak memory?

Implement a private variable using a WeakMap inside a class:

js
Copy
Edit
const privateData = new WeakMap();
class User {
constructor(name) {
privateData.set(this, { name });
}
getName() {
return privateData.get(this).name;
}
}
Use closure to simulate private data — then show how it can lead to long-lived memory.

Why does this cause a leak?

js
Copy
Edit
function setup() {
const bigData = new Array(1000000).fill('x');
return () => console.log(bigData[0]);
}
const log = setup();
Explain how requestAnimationFrame, setInterval, or setTimeout can cause memory leaks if not cleared.

🧰 8. Deep Clone, Spread/Rest, and Immutability Patterns
20 Coding Challenges

🔸 Basics
Use spread operator to copy an object and override one property.

What’s the difference between:

js
Copy
Edit
const a = obj;
const b = { ...obj };
Merge two arrays and remove duplicates using spread.

Extract the first item and the rest using destructuring + rest.

What’s the output?

js
Copy
Edit
const [a, ...b] = [1, 2, 3];
console.log(b); // ?
🔸 Intermediate
Write a function that deeply clones any object. (Recursive)

Why does this mutate the original object? Fix it.

js
Copy
Edit
const obj1 = { a: { b: 2 } };
const obj2 = { ...obj1 };
obj2.a.b = 5;
Deep clone using structuredClone() (modern).

Use JSON.stringify + parse to deep clone. What are limitations?

Create a utility deepFreeze(obj) to recursively freeze nested objects.

🔸 Advanced
Use recursion to update a nested property in a deeply nested object.

Build an immutable update(path)(value)(object) utility.

Explain immutability in Redux. How do you ensure it in reducers?

Use immer.js or write a mini version of a draft/mutator.

What’s the output?

js
Copy
Edit
const a = { x: 1 };
const b = Object.assign({}, a);
b.x = 2;
console.log(a.x); // ?
🔸 Real-world
Convert deeply nested state without mutation using a functional approach.

Compare mutation vs immutability performance in large objects.

Track updated vs unchanged fields using deep diff with JSON clone.

Implement a mergeDeep function that merges multiple objects recursively.

Why do some frameworks (like React) require immutability?

---

🧮 9. Array & Object Algorithms
20 Coding Challenges

These test logic, data manipulation, and pattern recognition — a must for frontend system design & performance.

🔸 Basics
Flatten a nested array

js
Copy
Edit
flatten([1, [2, [3, 4]], 5]); // [1, 2, 3, 4, 5]
Remove duplicates from an array

js
Copy
Edit
dedupe([1, 2, 2, 3, 1]); // [1, 2, 3]
Reverse an array in-place

Find the intersection of two arrays

Group objects by a key

js
Copy
Edit
groupBy([{id: 1}, {id: 2}, {id: 1}], 'id')
🔸 Intermediate
Chunk an array into groups of n

js
Copy
Edit
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
Write a function zip(arr1, arr2)

js
Copy
Edit
zip([1,2], ['a','b']) // [[1,'a'], [2,'b']]
Rotate array left by k elements

Find first non-repeating character

Deeply compare two objects for equality

🔸 Advanced
Flatten deeply nested object to a single level

js
Copy
Edit
flattenObj({ a: { b: 1, c: { d: 2 } } })
// { "a.b": 1, "a.c.d": 2 }
Build a nested object from a flattened key-value list

Write a function to deeply freeze an object

Remove falsy values from object

js
Copy
Edit
clean({ a: 1, b: null, c: false, d: 'ok' })
Transform array of key/value pairs to an object

js
Copy
Edit
toObject([['a', 1], ['b', 2]]) → { a: 1, b: 2 }
🔸 Real-World
Paginate a list (start, limit)

Sort objects by multiple keys

Create a histogram (frequency map)

Deduplicate objects by key

Merge arrays of objects by key

🛠️ 10. Custom Implementations
20 Must-Know Challenges

🔸 Core JS Functions
Implement Array.prototype.map

Implement Array.prototype.filter

Implement Array.prototype.reduce

Implement Array.prototype.forEach

Implement Array.prototype.find

🔸 Object & Bind
Polyfill Function.prototype.bind

Write your own Object.assign()

Implement deep clone (recursive)

Build a custom instanceof function

Implement new operator in JS

🔸 Utilities
Implement debounce(fn, delay)

Implement throttle(fn, limit)

Implement memoize(fn)

Create your own curry(fn) utility

Build a function pipe (left-to-right composition)

🔸 Async
Polyfill for Promise.all()

Custom retry(fn, attempts) logic

Create a sleep(ms) using Promises

raceWithTimeout(promise, ms)

🔸 Bonus
Build a cloneDeepWithTransform(obj, fn) function
— recursively clones, applying a transformation on each value

---

#### 🧠 What is Currying?

Answer:
<strong>Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking one argument at a time.
</strong>

###### 🔍 Example (Non-curried function):

```js
function sum(a, b, c) {
  return a + b + c;
}

sum(1, 2, 3); // 6
```

###### 🔄 Curried Version:

```js
function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

curriedSum(1)(2)(3); // 6
```

##### 🎯 Why Use Currying?

###### Benefit Description

- ✅ Reusability Partially apply a function and reuse with preset values
- ✅ Composability Compose smaller functions together for cleaner logic
- ✅ Delay execution You can return a function to run later with new data
- ✅ Works well with HOCs Especially in React, where currying is common in Redux and event handlers

##### 🔧 Currying in Practice

###### 1. Manual Curry Function

```js
function multiply(a) {
return function (b) {
return function (c) {
return a _ b _ c;
};
};
}
const partial = multiply(2); // Returns function (b) => ...
const partial2 = partial(3); // Returns function (c) => ...
console.log(partial2(4)); // 24
```

###### 2. Curry Utility Function (Generic)

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args); // enough arguments
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Usage:
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
```

##### 🧪 Real-World Use Cases of Currying

###### 🔷 1. Partial Application

```js
function greet(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = greet("Hello");
sayHello("Alice"); // "Hello, Alice!"
sayHello("Bob"); // "Hello, Bob!"
```

###### 🔷 2. Currying in React (Event Handlers)

```jsx
const handleChange = (field) => (e) => {
setForm((prev) => ({ ...prev, [field]: e.target.value }));
};

<input onChange={handleChange('email')} />
<input onChange={handleChange('password')} />
```

###### 🔷 3. Currying in Redux (Action Creators)

```js
const updateField = (field) => (value) => ({
  type: "UPDATE_FIELD",
  payload: { field, value },
});

dispatch(updateField("email")("john@example.com"));
```

##### ⚠️ Currying vs Partial Application

| Concept  | Description                                          |
| -------- | ---------------------------------------------------- |
| Currying | Converts multi-arg function to series of unary funcs |
| Partial  | Application Fixes some arguments now, defers rest    |

```js
// Partial
const add = (a, b) => a + b;
const add5 = add.bind(null, 5);
add5(3); // 8

// Currying
const curriedAdd = (a) => (b) => a + b;
curriedAdd(5)(3); // 8
```

##### ✅ Summary

- Currying transforms: f(a, b, c) → f(a)(b)(c)
- Helps in creating partially applied, reusable, and composable functions
- Common in functional programming, React, and libraries like Lodash, Ramda
  -Improves code clarity, testability, and logic flo

⚙️ Advanced Currying Examples in JavaScript
✅ 1. Currying for Dynamic Rule-Based Form Validation
js
Copy
Edit
// Curried validator
const validateField = (field) => (rules) => (value) =>
rules.reduce((acc, ruleFn) => acc && ruleFn(value), true);

// Usage
const isRequired = (v) => v !== '';
const isEmail = (v) => /\S+@\S+\.\S+/.test(v);

const emailValidator = validateField('email')([isRequired, isEmail]);

console.log(emailValidator('test@example.com')); // true
console.log(emailValidator('')); // false
🧠 Useful in form builders or reusable validation engines.

✅ 2. Event Delegation Utility with Currying
js
Copy
Edit
const delegate = (selector) => (eventType) => (callback) => {
document.addEventListener(eventType, function (e) {
if (e.target.matches(selector)) {
callback(e);
}
});
};

// Usage
const onButtonClick = delegate('button')('click');
onButtonClick((e) => console.log(`Clicked: ${e.target.textContent}`));
🧠 Clean abstraction for large component trees or vanilla event delegation.

✅ 3. Composable Logging Utility with Currying
js
Copy
Edit
const log = (prefix) => (level) => (message) =>
console[level](`[${prefix}] ${message}`);

// Usage
const appLog = log('App');
appLog('warn')('This is a warning');
appLog('info')('Started successfully');
🧠 Great for structured logs in enterprise-scale apps.

✅ 4. Function Pipeline Builder with Currying
js
Copy
Edit
const pipe = (...fns) => (initial) =>
fns.reduce((acc, fn) => fn(acc), initial);

// Reusable functions
const trim = (s) => s.trim();
const toLower = (s) => s.toLowerCase();
const wrap = (tag) => (str) => `<${tag}>${str}</${tag}>`;

// Usage
const format = pipe(trim, toLower, wrap('span'));
console.log(format(' HELLO WORLD ')); // <span>hello world</span>
🧠 Simulates Unix pipelines / FP chaining (Ramda, Lodash/fp-style).

✅ 5. Currying in Redux Thunk Creators
js
Copy
Edit
const createThunk = (entity) => (method) => (params) => async (dispatch) => {
const result = await fetch(`/api/${entity}/${method}`, { body: JSON.stringify(params) });
dispatch({ type: `${entity.toUpperCase()}_${method.toUpperCase()}`, payload: await result.json() });
};

// Usage
const getUser = createThunk('user')('get');
dispatch(getUser({ id: 1 }));
🧠 Dynamically generates action creators by currying!

✅ 6. Curried Selector Generator for Nested Objects
js
Copy
Edit
const select = (path) => (obj) =>
path.split('.').reduce((acc, key) => acc?.[key], obj);

// Usage
const getUserEmail = select('user.contact.email');
const user = { user: { contact: { email: 'john@example.com' } } };
console.log(getUserEmail(user)); // john@example.com
🧠 Helps in large state objects (Redux, Zustand, etc.).

✅ 7. Currying for Functional Permissions Check
js
Copy
Edit
const hasPermission = (user) => (resource) => (action) =>
user.roles.includes('admin') || user.permissions[resource]?.includes(action);

// Usage
const canEdit = hasPermission(currentUser)('article')('edit');
🧠 Use in access guards, RBAC, or BFFs (Backend for Frontend).

✅ 8. Curried Template Formatter
js
Copy
Edit
const formatTemplate = (template) => (data) =>
template.replace(/\{(\w+)\}/g, (\_, key) => data[key] || '');

const welcomeMessage = formatTemplate("Hello {name}, welcome to {company}!");
console.log(welcomeMessage({ name: 'Alice', company: 'Anvey Tech' }));
🧠 Think CMS template rendering, email composition.

✅ 9. Currying for Dynamic API Route Construction
js
Copy
Edit
const buildApiRoute = (base) => (version) => (resource) => (id = '') =>
`${base}/v${version}/${resource}${id ? `/${id}` : ''}`;

// Usage
const userRoute = buildApiRoute('/api')('1')('users');
console.log(userRoute(123)); // /api/v1/users/123
🧠 Reduces duplication in REST-heavy systems.

✅ 10. Curried Internationalization (i18n) Function
js
Copy
Edit
const translate = (translations) => (lang) => (key) =>
translations[lang]?.[key] || key;

// Usage
const messages = {
en: { greeting: 'Hello' },
fr: { greeting: 'Bonjour' },
};

const t = translate(messages);
console.log(t('en')('greeting')); // Hello
console.log(t('fr')('greeting')); // Bonjour
🧠 Helps you build powerful multilingual apps with lightweight abstractions.

🧠 Key Takeaways
Currying promotes reusability, configurability, and clarity

Advanced currying unlocks elegant abstractions in real-world apps

Widely useful in:

React event handling

Redux actions

Permission/access checks

Functional pipelines

API utilities and validators

Would you like:

🧪 10 advanced curry-focused interview questions?

📦 These examples bundled into a printable PDF?

🔄 Examples converted using Lodash/fp or Ramda?

Let me know how you'd like to continue!

You said:
10 advanced curry-focused interview questions?

ChatGPT said:
Absolutely! Here are 10 advanced, scenario-based interview questions focused on currying in JavaScript, tailored for 8+ years experience, especially relevant in React, functional programming, state management, and real-world abstractions.

🎯 10 Advanced Currying Interview Questions (with Sample Answers)

1. How would you use currying to improve the readability and reusability of a validation system in a form engine?
   Answer:
   Use curried validators like validate(field)(rules)(value), where:

field identifies the field

rules is an array of validation functions

value is the input to validate

This lets you create reusable, partially applied validators per field, improving code modularity and reuse.

2. Can you demonstrate how currying helps simplify Redux action creator factories?
   Answer:

js
Copy
Edit
const createAction = (entity) => (type) => (payload) => ({
type: `${entity}/${type}`,
payload,
});
This allows:

js
Copy
Edit
const userActions = createAction('user');
dispatch(userActions('login')({ username }));
✅ Promotes DRY principles and makes actions easy to organize by domain.

3. How does currying enable functional composition pipelines in JavaScript?
   Answer:
   Currying returns functions that can be chained together using pipe or compose.

Example:

js
Copy
Edit
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const formatter = pipe(trim, toLower, wrap('div'));
It enables small, single-responsibility functions to compose into complex logic.

4. What's the difference between currying and partial application? Give an example.
   Answer:

Currying transforms a function of n arguments into n unary functions.

Partial application fixes a few arguments of a function and returns a function that takes the rest.

js
Copy
Edit
// Currying
const add = (a) => (b) => a + b;
add(1)(2);

// Partial
const add3 = (a, b) => a + b;
const add1 = add3.bind(null, 1);
add1(2); 5. In a large React application, how would you use currying to handle form state updates efficiently?
Answer:

jsx
Copy
Edit
const handleChange = (field) => (e) =>
setForm((prev) => ({ ...prev, [field]: e.target.value }));
Used like:

jsx
Copy
Edit
<input onChange={handleChange('email')} />
✅ This avoids writing separate handlers for every field.

6. How can currying be used to simplify permission checks in an RBAC system?
   Answer:

js
Copy
Edit
const canAccess = (user) => (resource) => (action) =>
user.roles.includes('admin') || user.permissions[resource]?.includes(action);

canAccess(user)('dashboard')('read');
This separates concerns: user → resource → action, while allowing partial reuse.

7. How would you implement a curried logger utility that supports logging levels and contexts?
   Answer:

js
Copy
Edit
const log = (context) => (level) => (message) =>
console[level](`[${context}] ${message}`);

const appLog = log('Auth');
appLog('warn')('Invalid credentials'); 8. How can currying be leveraged in a utility that constructs API endpoints dynamically?
Answer:

js
Copy
Edit
const apiRoute = (base) => (version) => (resource) => (id = '') =>
`${base}/v${version}/${resource}${id ? `/${id}` : ''}`;

const userApi = apiRoute('/api')('1')('users');
userApi(123); // /api/v1/users/123 9. How would you write a curried utility for conditional styling in a React component?
Answer:

js
Copy
Edit
const classIf = (condition) => (trueClass) => (falseClass = '') =>
condition ? trueClass : falseClass;

// Usage
const btnClass = classIf(isActive)('btn-primary')('btn-secondary'); 10. How do libraries like Lodash/fp or Ramda use currying to encourage functional programming?
Answer:
These libraries expose curried versions of all their functions by default:

js
Copy
Edit
const users = [{ id: 1 }, { id: 2 }];
const getById = \_.find({ id: 2 });
getById(users); // { id: 2 }
✅ Encourages composition and reuse without needing .bind() or closures.

🧠 Summary
These questions demonstrate:

Currying's use in cleaning up complex business logic

Creating composable and partially reusable utilities

Improving React code reuse, state updates, and access control

### Most Common Request Headers In React

#### ✅ Part 1: Most Common Request Headers in React (via fetch or Axios)

| Header Name      | Purpose                                                           |
| ---------------- | ----------------------------------------------------------------- |
| Content-Type     | Specifies the format of the request body (e.g., application/json) |
| Accept           | Specifies the format you expect from the server                   |
| Authorization    | Sends auth credentials (e.g., Bearer <token>)                     |
| X-CSRF-Token     | Sends CSRF token for form/data protection (if server expects it)  |
| Cache-Control    | Controls caching policy (no-store, no-cache, max-age=0, etc.)     |
| Cookie           | (automatically sent by browser if withCredentials)                |
| Origin / Referer | Indicates the origin of the request (used in CORS)                |
| User-Agent       | Identifies the client (browser info) — added automatically        |

#### ✅ Part 2: Different Request Content Types (and Headers)

##### 1️⃣ JSON API Request

Used when sending structured data (e.g., user info, login, etc.)

```js
fetch("/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({ username, password }),
});
```

| Header       | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |
| Accept       | application/json |

##### 2️⃣ Form Submission (URL Encoded)

- Used for traditional form-like data (like login forms or filters)

```js
const params = new URLSearchParams({ username: "john", password: "secret" });

fetch("/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: params.toString(),
});
```

| Header       | Value                             |
| ------------ | --------------------------------- |
| Content-Type | application/x-www-form-urlencoded |

##### 3️⃣ File Upload (FormData / Multipart)

```js
const formData = new FormData();
formData.append("file", file);

fetch("/upload", {
  method: "POST",
  body: formData,
});
```

| Header       | Value                                                                                 |
| ------------ | ------------------------------------------------------------------------------------- |
| Content-Type | automatically set to multipart/form-data; boundary=... by browser when using FormData |

- ❗ Do NOT manually set Content-Type when using FormData — let the browser handle it.

##### 4️⃣ Plain Text or Raw Data

```js
fetch("/log", {
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
  },
  body: "Log this event",
});
```

| Header       | Value      |
| ------------ | ---------- |
| Content-Type | text/plain |

##### 5️⃣ Blob / File Download

When expecting a file (like PDF, Excel):

```js
fetch("/download/report", {
  method: "GET",
  headers: {
    Accept: "application/pdf",
  },
})
  .then((res) => res.blob())
  .then(downloadBlob);
```

| Header | Value                                           |
| ------ | ----------------------------------------------- |
| Accept | application/pdf, application/octet-stream, etc. |

##### 6️⃣ GraphQL Request

```js
fetch("/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `query { user { name } }`,
  }),
});
```

| Header       | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

##### 🔐 Auth Header (Common Across All)

Most APIs need this when a token is issued:

```js
headers: {
Authorization: `Bearer ${token}`,
}
```

✅ Summary Table
|Use Case| Content-Type |Accept| Notes|
|---|---|---|---|
|JSON API| application/json| application/json |Most common for REST APIs|
|Form submission | application/x-www-form-urlencoded| —| Traditional forms|
|File upload| Let browser set via FormData |—| Don’t manually set Content-Type|
|Text log| text/plain |— |Simple logging|
|File download (PDF)| — |application/pdf| Use res.blob()|
|GraphQL| application/json| application/json| Query-based|
|Auth required |— |— |Add Authorization header|

<strong>🧠 Pro Tips</strong>

- Use withCredentials: true if sending cookies in CORS requests.

- Avoid setting Content-Type when using FormData.

- Always match server expectations — check API docs or Swagger.
