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
// 16. What is debouncing and throttling in JavaScript?
// 17. How do you implement debouncing in JavaScript?
// 18. How do you implement throttling in JavaScript?
// 19. What is a prototype in JavaScript?
// 20. How do you create a prototype chain?
// 21. What is the difference between call, apply, and bind?
// 22. What is the difference between function declaration and function expression?
// 23. How do you use Object.create method?
// 24. What are ES6 classes in JavaScript?
// 25. How do you use extends and super keywords in JavaScript?
// 26. How do you create a singleton in JavaScript?
// 27. What is typeof vs instanceof?
// 28. What is the new keyword in JavaScript?
// 29. What is the difference between Object.keys, Object.values, and Object.entries?
// 30. How do you freeze an object in JavaScript?
// 31. What is a mixin in JavaScript?
// 32. How do you create a module in JavaScript?
// 33. What are import and export in JavaScript?
// 34. How do you use dynamic imports in JavaScript?
// 35. What is the fetch API?
// 36. How do you handle HTTP requests using fetch?
// 37. What are cookies in JavaScript?
// 38. How do you set and get cookies in JavaScript?
// 39. What is the document.cookie API?
// 40. What is CORS, and how do you handle it in JavaScript?
// 41. How do you use async and await with fetch?
// 42. What are Generators in JavaScript?
// 43. How do you create and use a generator function?
// 44. What is the purpose of the yield keyword?
// 45. What is Symbol in JavaScript?
// 46. How do you use symbols to create private properties?
// 47. What are iterators in JavaScript?
// 48. How do you create a custom iterator?
// 49. What is a Proxy object in JavaScript?
// 50. How do you use Reflect in JavaScript?
// 51. What are template literals and tagged templates?
// 52. What is Map and Set in JavaScript?
// 53. How do you use WeakMap and WeakSet?
// 54. What is a Promise.all and how does it work?
// 55. How do you use Promise.race?
// 56. What are Web Workers in JavaScript?
// 57. How do you create and use a Web Worker?
// 58. How does message passing work with Web Workers?
// 59. What is the difference between synchronous and asynchronous code?
// 60. How do you use Promise.allSettled?
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