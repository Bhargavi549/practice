// 1. What is hoisting in JavaScript?
// Hoisting in JavaScript is a behavior where variable and function declarations are moved, or "hoisted," to the top of their containing scope.
console.log(a);  // Output: undefined
var a = 5;
// Variables declared with var are hoisted to the top of their scope but are initialized with undefined
console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 10;
// Function declarations are fully hoisted, meaning you can call a function before it is defined in the code.
greet();  // Output: "Hello"
function greet() {
  console.log("Hello");
}

// 2. What are closures in JavaScript?
// 3. What is the difference between var, let, and const in terms of scope and hoisting?
// let, const are blocked scopes var is global scope
function testVar() {
    if (true) {
      var x = 10;
    }
    console.log(x);  // Output: 10 (since `var` is function-scoped, not block-scoped)
  }
  testVar();

  
  function testLet() {
    if (true) {
      let y = 20;
    }
    console.log(y);  // ReferenceError: y is not defined (due to block-scoping)
  }
  testLet();

  
  function testConst() {
    if (true) {
      const z = 30;
    }
    console.log(z);  // ReferenceError: z is not defined (due to block-scoping)
  }
  testConst();

// 4. How does the JavaScript engine execute the code?


// 6. How do you handle asynchronous operations in JavaScript?
// Handling asynchronous operations in JavaScript is essential due to its non-blocking, single-threaded nature. 
// The main tools for handling asynchronous operations are callbacks, promises, and async/await.
// callbacks:  A callback is a function passed as an argument to another function and is executed after the asynchronous operation completes. Callbacks were the original method to handle asynchronous code in JavaScript.
function fetchData(callback) {
    setTimeout(() => {
      callback("Data loaded");
    }, 1000);
  }
  
  fetchData(function(data) {
    console.log(data);  // Output: "Data loaded" after 1 second
  });
// Callback Hell: When multiple asynchronous operations are dependent on each other, callbacks can become nested, leading to unreadable and difficult-to-maintain code.
// multiple asyncronous functions are chained to form callbackhell, code complex issue.
asyncOperation1(function(result1) {
    asyncOperation2(result1, function(result2) {
      asyncOperation3(result2, function(result3) {
        // And so on...
      });
    });
  });

// promises:  A promise is an object representing the eventual completion (or failure) of an asynchronous operation. It provides a cleaner way to handle asynchronous code compared to callbacks and helps prevent callback hell.
// A promise has three states:
// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.
// Creating and Using Promises:  
let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;  
      if (success) {
        resolve("Data loaded");
      } else {
        reject("Error loading data");
      }
    }, 1000);
  });
  
  fetchData
    .then((data) => {
      console.log(data);  // Output: "Data loaded"
    })
    .catch((error) => {
      console.log(error);  // If there was an error, it will be handled here
    });

// Async/await is syntactic sugar built on top of promises that allows asynchronous code to be written in a more synchronous, readable style. It simplifies chaining and error handling without the need for .then() and .catch().
// async: Declares an asynchronous function, which returns a promise.
// await: Pauses the execution of the function until the promise is resolved (or rejected). It can only be used inside async functions.
async function fetchData() {
    try {
      let data = await new Promise((resolve) => {
        setTimeout(() => resolve("Data loaded"), 1000);
      });
      console.log(data);  // Output: "Data loaded"
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchData();
   
// 8. What are arrow functions, and how do they differ from regular functions?
// Arrow functions are written using the => ("arrow") syntax. Here's an example of a simple arrow function:
function add(a, b) {
    return a + b;     // regular expression
  }

const add = (a, b) => a + b; //arrow function

// 9. How does the this keyword behave in arrow functions?


// 10. What is a callback hell and how do you avoid it?
// Callback Hell: When multiple asynchronous operations are dependent on each other, callbacks can become nested, leading to unreadable and difficult-to-maintain code.
// multiple asyncronous functions are chained to form callbackhell, code complex issue.
asyncOperation1(function(result1) {
    asyncOperation2(result1, function(result2) {
      asyncOperation3(result2, function(result3) {
        asyncOperation4(result3, function(result4) {
          console.log("Final result:", result4);
        });
      });
    });
  });
// To avaoid callback hell in 4 ways: 
// 1. Using Promises  
asyncOperation1()
  .then(result1 => {
    return asyncOperation2(result1);
  })
  .then(result2 => {
    return asyncOperation3(result2);
  })
  .then(result3 => {
    return asyncOperation4(result3);
  })
  .then(result4 => {
    console.log("Final result:", result4);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
//2. Using Async/Await
async function processOperations() {
    try {
      const result1 = await asyncOperation1();
      const result2 = await asyncOperation2(result1);
      const result3 = await asyncOperation3(result2);
      const result4 = await asyncOperation4(result3);
      console.log("Final result:", result4);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  } 
  processOperations();
//3. Modularizing Callback Functions
function asyncOperation1Callback(result1) {
    asyncOperation2(result1, asyncOperation2Callback);
  }
  
  function asyncOperation2Callback(result2) {
    asyncOperation3(result2, asyncOperation3Callback);
  }
  
  function asyncOperation3Callback(result3) {
    asyncOperation4(result3, finalCallback);
  }
  
  function finalCallback(result4) {
    console.log("Final result:", result4);
  } 
  asyncOperation1(asyncOperation1Callback);
//4. Using Control Flow Libraries
async.waterfall([
    function(callback) {
      asyncOperation1(callback);
    },
    function(result1, callback) {
      asyncOperation2(result1, callback);
    },
    function(result2, callback) {
      asyncOperation3(result2, callback);
    },
    function(result3, callback) {
      asyncOperation4(result3, callback);
    }
  ], function (error, finalResult) {
    if (error) {
      console.error("An error occurred:", error);
    } else {
      console.log("Final result:", finalResult);
    }
  });
  
// 11. How do you handle errors in promises?
// The most common way to handle errors in promises is by using the .catch() method. 
const asyncOperation = () => {
    return new Promise((resolve, reject) => {
      const success = false; // Simulate success or failure
      if (success) {
        resolve("Operation succeeded");
      } else {
        reject("Operation failed");
      }
    });
  };
  
  asyncOperation()
    .then(result => {
      console.log(result); // This runs if the promise is resolved
    })
    .catch(error => {
      console.error("Error:", error); // This runs if the promise is rejected
    });  

// 12. What is the event loop in JavaScript?
// asyncronus functions are handled by an event loop, event loop is an mechanism it continuesly checks macrostack queue and microstack queue for webapis till the callstack is empty
console.log('Start');
setTimeout(() => {
  console.log('Timeout callback');
}, 0);
Promise.resolve()
  .then(() => {
    console.log('Promise resolved');
  });
console.log('End');

// 13. What are microtasks and macrotasks in JavaScript?
// In JavaScript, microtasks and macrotasks (also known as tasks) are two types of asynchronous operations that are handled differently by the event loop. 
// microstack code it process immediately
console.log('Start');
Promise.resolve()
  .then(() => {
    console.log('Promise resolved');
  });
console.log('End');
// macrostack : it process after microstack queue
console.log('Start');
setTimeout(() => {
  console.log('Timeout callback');
}, 0);
console.log('End');

// 15. How do you create a custom error in JavaScript?
// 21. What is the difference between call, apply, and bind?
// 22. What is the difference between function declaration and function expression?
// 24. What are ES6 classes in JavaScript?


// 28. What is the new keyword in JavaScript?
// The new keyword in JavaScript is used to create instances of objects from constructor functions or ES6 classes. When you use new with a constructor function or class, it automates the process of creating a new object, binding this to that object, and setting up the inheritance chain. 
// Creates a New Object: A new, empty object is created.
function person (name, age){
  this.name = name,
  this.age =age
}
const person1 = new person("john",20)
console.log(person1.name)

// 29. What is the difference between Object.keys, Object.values, and Object.entries?
// Object.keys : Returns an array of keys
// Object.values : Returns an array of values
// Object.entries : Returns an array of keys and values.
const person = {
  "name":"john",
  "age":19,
  "contry":"india"
}
const keys = Object.keys(person)    // [ 'name', 'age', 'contry' ]
console.log(keys)

const person2 = {
  "name":"john",
  "age":19,
  "contry":"india"
}
const values = Object.values(person2)
console.log(values)                    // [ 'john', 19, 'india' ]

const person3 = {
  "name":"john",
  "age":19,
  "contry":"india"
}
const entries = Object.entries(person3)
console.log(entries)                       // [ [ 'name', 'john' ], [ 'age', 19 ], [ 'contry', 'india' ] ]

// 30. How do you freeze an object in JavaScript?
// Prevents adding new properties: You can’t add new properties to the object.
const person = {
  name: 'John',
  age: 30
};
Object.freeze(person);
person.age = 35; // No effect, object is frozen
person.city = 'New York'; // No effect, can't add new properties
console.log(person);                       // Output: { name: 'John', age: 30 }

// 35. What is the fetch API?
// 36. How do you handle HTTP requests using fetch?

// 37. What are cookies in JavaScript?
// 38. How do you set and get cookies in JavaScript?
// 39. What is the document.cookie API?

// 40. What is CORS, and how do you handle it in JavaScript?
// cors is a middleware function ,it access users data to unautherized access
//cors: cross origin resource sharing is abrowser security feature is a security mechanism implemented by web browsers that allows or restricts web applications running at one origin (domain) to different origin.
// To handle CORS, you must configure the server to include appropriate headers (Access-Control-Allow-Origin, Access-Control-Allow-Methods, etc.).
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow all origins
// Or, for specific origins:
// app.use(cors({ origin: 'http://example.com' }));

app.get('/',req,res=>{
  res.json({message: 'hello world'})
})
app.listen(5000,()=>{console.log('server running on port 5000')})

// 41. How do you use async and await with fetch?
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();  // Parse the JSON response
    console.log(data);                   // Use the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);  // Handle errors
  }
}

fetchData();  // Call the async function

// 42. What are Generators in JavaScript?
// 43. How do you create and use a generator function?

// 44. What is the purpose of the yield keyword?
// The yield keyword in JavaScript is used within a generator function (function*) to pause its execution and return a value. 

// 45. What is Symbol in JavaScript?
// In JavaScript, a Symbol is a primitive data type that represents a unique and immutable identifier. 
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2);  // false - Each symbol is unique

// 46. How do you use symbols to create private properties?
// By using symbols as property keys, you can simulate private properties in JavaScript, as they are not exposed through standard iteration or object manipulation methods.
const _age = Symbol('age');  // "Private" property
class Person {
  constructor(name, age) {
    this.name = name;
    this[_age] = age;  // Store age using symbol
  }
  getAge() {
    return this[_age];  // Access the private property using the symbol
  }
}
const john = new Person('John', 30);
console.log(john.name);  // 'John'
console.log(john.getAge());  // 30
// Trying to access the "private" property directly:
console.log(john[_age]);  // 30, but it's not enumerable
console.log(Object.keys(john));  // ['name'] - Symbol is hidden

// 47. What are iterators in JavaScript?
// 48. How do you create a custom iterator?
// 49. What is a Proxy object in JavaScript?
// 50. How do you use Reflect in JavaScript?

// 52. What is Map and Set in JavaScript?
// In JavaScript, Map and Set are built-in data structures introduced in ES6 (ECMAScript 2015). They provide more flexibility and functionality compared to traditional objects and arrays.
//  Map Methods:
// set(key, value): Adds or updates a key-value pair.
// get(key): Retrieves the value associated with the key.
// has(key): Returns true if the key exists, otherwise false.
// delete(key): Removes a key-value pair.
// clear(): Removes all key-value pairs.
// size: Returns the number of key-value pairs in the Map.
// forEach(callback): Iterates over the key-value pairs. 
const map = new Map();

// Setting key-value pairs
map.set('name', 'Alice');
map.set(42, 'The answer');
map.set(true, 'Yes');

// Getting values by key
console.log(map.get('name')); // "Alice"
console.log(map.get(42)); // "The answer"

// Checking existence of keys
console.log(map.has(true)); // true

// Iterating over a Map
map.forEach((value, key) => {
  console.log(key, value);
});

// Size of the Map
console.log(map.size); // 3

// Deleting a key
map.delete('name');

// Clearing the Map
map.clear();

//set: A Set is a collection of unique values. Unlike arrays, Sets do not allow duplicate values. The values in a Set can be of any type (primitives, objects, functions).
const set = new Set();

// Adding values
set.add(1);
set.add(2);
set.add(3);
set.add(3);  // Duplicate values are ignored

// Checking existence
console.log(set.has(2)); // true
console.log(set.has(5)); // false

// Iterating over a Set
set.forEach(value => {
  console.log(value);
});

// Size of the Set
console.log(set.size); // 3

// Deleting a value
set.delete(2);

// Clearing the Set
set.clear();

// 53. How do you use WeakMap and WeakSet?
//WeakMap: A collection of key-value pairs where the keys are objects, and they can be garbage collected when no longer referenced.
// WeakSet: A collection of unique objects that can be garbage collected when no longer referenced.
// A WeakMap is similar to a regular Map, but it only accepts objects as keys, and the keys are "weakly held." This means that if there are no other references to a key object, it can be garbage collected, even if it's stored in the WeakMap.
let obj1 = { name: 'Object 1' };
let obj2 = { name: 'Object 2' };

const weakMap = new WeakMap();

// Adding objects as keys
weakMap.set(obj1, 'Some value');
weakMap.set(obj2, 'Another value');

// Getting values by key
console.log(weakMap.get(obj1));  // "Some value"

// Checking existence of a key
console.log(weakMap.has(obj2));  // true

// Deleting a key
weakMap.delete(obj1);
console.log(weakMap.has(obj1));  // false

// If obj2 is dereferenced, it can be garbage collected
obj2 = null;

// A WeakSet is similar to a regular Set, but it only stores objects (not primitives), and the objects are weakly held. Like WeakMap, if no other references to an object exist, it can be garbage collected.
let obj11 = { name: 'Object 1' };
let obj22= { name: 'Object 2' };

const weakSet = new WeakSet();

// Adding objects to the WeakSet
weakSet.add(obj11);
weakSet.add(obj22);

// Checking existence of an object
console.log(weakSet.has(obj11));  // true

// Deleting an object from the WeakSet
weakSet.delete(obj22);
console.log(weakSet.has(obj22));  // false

// If obj1 is dereferenced, it can be garbage collected
obj11 = null;

// 54. What is a Promise.all and how does it work?
// Promise.all() is useful for performing parallel asynchronous operations.
// It resolves when all input promises wait for all of them promieses resolved, and returns an array of results.
// It rejects if any one of the input promises rejects, immediately result will give error.
const promise1 = Promise.resolve(10);
const promise2 = Promise.reject('Error in promise2');
const promise3 = Promise.resolve('Resolved value');

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error('One of the promises rejected:', error);  // "One of the promises rejected: Error in promise2"
  });
// Use Case: Fetching Data from Multiple APIs
const fetchData1 = fetch('https://api.example.com/data1');
const fetchData2 = fetch('https://api.example.com/data2');
const fetchData3 = fetch('https://api.example.com/data3');

Promise.all([fetchData1, fetchData2, fetchData3])
  .then((responses) => Promise.all(responses.map(res => res.json())))
  .then((data) => {
    console.log(data);  // Logs array of parsed JSON from all 3 responses
  })
  .catch((error) => {
    console.error('One of the fetches failed:', error);
  });

// 55. How do you use Promise.race?
// 60. How do you use Promise.allSettled?
// 56. What are Web Workers in JavaScript?
// 57. How do you create and use a Web Worker?
// 58. How does message passing work with Web Workers?
// 59. What is the difference between synchronous and asynchronous code?
// 61. What is memoization in JavaScript?
// 62. How do you implement memoization in JavaScript?
// 63. What is a Pure function?
// 64. How do you handle deep cloning of objects?
// 65. What is functional programming in JavaScript?
// 66. How do you use currying in JavaScript?
// 67. What is the bind method used for?
// 68. How does the apply method differ from call?
// 69. What is JSONP, and how does it differ from fetch?
// 70. How do you work with binary data in JavaScript?