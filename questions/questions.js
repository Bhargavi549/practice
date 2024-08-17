/*
Node js quesitons after this question try to implement CRUD Operations

1. What is Node.js, and how is it different from traditional web servers?
2. How does the event loop work in Node.js?
4. How do you manage asynchronous operations in Node.js?
5. What is middleware in Express.js, and how do you create one?
6. How does Node.js handle file I/O?
7. What are some common security practices in Node.js applications?,
8. How do you handle errors in Node.js?
9. What is the difference between process.nextTick() and setImmediate()?
10. How do you handle environment variables in Node.js?
11. What is a callback function, and how is it used in Node.js?
12. What is NPM, and what role does it play in Node.js development?
13. How do you create and use a custom module in Node.js?
14. Explain the difference between synchronous and asynchronous functions in Node.js.
15. What are the core modules of Node.js, and how do you use them?
17. How do you manage dependencies in a Node.js project?
19. Explain the concept of non-blocking I/O in Node.js.
20. What is the purpose of the path module in Node.js?
21. How do you use the http module to create a simple web server in Node.js?
22. What is the purpose of the util module in Node.js?
23. How does Node.js handle concurrency?
24. What is the process object in Node.js, and how can it be used?
25. How do you debug a Node.js application?
26. What is the purpose of the crypto module in Node.js?
27. How do you handle exceptions in Node.js?
28. What are some best practices for structuring a Node.js project?
29. How do you manage sessions in an Express.js application?
30. What is the domain module in Node.js, and why is it deprecated?
31. How do you use the eventEmitter class in Node.js?
32. What is the zlib module in Node.js, and how is it used for compression?
33. How do you set up a RESTful API in Node.js?
34. What is the purpose of the url module in Node.js?
35. How do you handle cross-origin requests in a Node.js application?
36. What is the difference between CommonJS and ES6 modules in Node.js?
37. How do you implement authentication in a Node.js application?
38. What is the purpose of the querystring module in Node.js?
39. How do you connect to a database in Node.js?
40. What are the advantages and disadvantages of using Node.js?
41. How do you manage child processes in Node.js?
42. What is the purpose of the assert module in Node.js?
43. How do you implement file uploads in a Node.js application?
44. What is the purpose of the os module in Node.js?
46. How do you handle routing in an Express.js application?
47. What is the purpose of the readline module in Node.js?
48. How do you implement WebSockets in a Node.js application?
49. What is the purpose of the dns module in Node.js?
50. How do you secure a Node.js application?
51. How do you handle cookies in a Node.js application?
52. What is the purpose of the timers module in Node.js?
53. How do you handle file downloads in a Node.js application?
54. What is the v8 module in Node.js, and what does it expose?
55. How do you implement logging in a Node.js application?
57. How do you handle pagination in a Node.js application?
59. How do you implement data validation in a Node.js application?
60. What is the purpose of the vm module in Node.js?
61. How do you implement caching in a Node.js application?
63. What is the http2 module in Node.js, and how does it differ from http?
66. What is the purpose of the string_decoder module in Node.js?
68. What is the purpose of the inspector module in Node.js?
69. How do you handle WebSocket disconnections in a Node.js application?
70. What is the purpose of the trace_events module in Node.js?
71. How do you deploy a Node.js application to production?
73. How do you implement rate limiting in a Node.js application?
74. What is the purpose of the async_hooks module in Node.js?
76. What is the purpose of the http-proxy module in Node.js?
78. What is the purpose of the express-validator library in Node.js?
79. How do you optimize performance in a Node.js application?
81. How do you handle timeouts in a Node.js application?
82. What is the purpose of the compression middleware in Node.js?
85. How do you handle circular dependencies in a Node.js application?
86. What is the purpose of the dotenv package in Node.js?
87. How do you implement email sending in a Node.js application?
89. How do you handle request payloads in a Node.js application?
90. What is the purpose of the winston logging library in Node.js?
91. How do you manage API versioning in a Node.js application?
92. What is the purpose of the bcrypt library in Node.js?
94. What is the purpose of the jsonwebtoken package in Node.js?
95. How do you handle multipart form data in a Node.js application?
96. What is the purpose of the multer middleware in Node.js?
97. How do you handle large file uploads in a Node.js application?
98. What is the purpose of the socket.io library in Node.js?
99. How do you manage state in a Node.js application?
100. What are some common mistakes to avoid when developing with Node.js?

Javascript Questions

1. What is the difference between var, let, and const?
2. Explain the concept of closures in JavaScript.
3. What is the this keyword, and how does it behave differently in various contexts?
4. What is the event delegation model in JavaScript?
5. What are prototypes in JavaScript?
6. How does the Promise object work in JavaScript?
7. Explain the difference between synchronous and asynchronous code in JavaScript.
8. What is the purpose of map(), filter(), and reduce()?
9. What are JavaScript modules, and how are they implemented?
10. What is the difference between == and === in JavaScript?
11. What is hoisting in JavaScript?
12. What are JavaScript closures, and how are they useful?
13. Explain the difference between function declarations and function expressions in JavaScript.
14. What is the call, apply, and bind method in JavaScript?
15. What is the difference between null and undefined in JavaScript?
16. How does JavaScript handle type coercion?
17. What is the difference between a shallow copy and a deep copy in JavaScript?
18. What is the event loop in JavaScript?
19. Explain how the async and await keywords work in JavaScript.
20. What are higher-order functions in JavaScript?
21. What is a callback function, and how is it used in JavaScript?
22. What are arrow functions, and how do they differ from regular functions?
23. What is the concept of promise chaining in JavaScript?
24. What are the different types of errors in JavaScript?
25. Explain how try, catch, and finally blocks work in JavaScript.
26. What is the difference between for, for...in, and for...of loops in JavaScript?
27. How does JavaScript handle scope?
28. What is the difference between global scope and local scope?
29. Explain the concept of lexical scope in JavaScript.
30. What are template literals in JavaScript, and how are they used?
31. How does destructuring work in JavaScript?
32. What is the spread operator, and how is it used in JavaScript?
33. What is the rest parameter, and how does it work in JavaScript?
34. How does JavaScript handle asynchronous code execution?
35. What is a generator function, and how does it work in JavaScript?
36. Explain the concept of event bubbling and event capturing in JavaScript.
37. What are the different ways to create objects in JavaScript?
38. How does JavaScript implement inheritance?
39. What is the difference between Object.create() and a constructor function in JavaScript?
40. What is strict mode in JavaScript, and how is it enabled?
41. Explain how JavaScript's setTimeout() and setInterval() functions work.
42. What is JSON, and how do you parse and stringify JSON in JavaScript?
43. How does JavaScript handle asynchronous events?
44. What are Symbol data types in JavaScript?
45. How does JavaScript handle memory management?
46. What is event.preventDefault() and event.stopPropagation() in JavaScript?
47. Explain the concept of immutable and mutable data types in JavaScript.
48. How do you implement currying in JavaScript?
49. What are JavaScript iterables and iterators?
50. How does JavaScript's forEach() method differ from map()?
51. What is the purpose of try...catch blocks in JavaScript?
52. Explain how JavaScript's Promise.all() method works.
53. What is the difference between throw and return in error handling?
54. What is the Map object in JavaScript, and how is it different from an Object?
55. What is the Set object in JavaScript, and how does it differ from an Array?
56. How do you create a singleton in JavaScript?
57. Explain the concept of hoisting with variables and functions in JavaScript.
58. What is the difference between call, apply, and bind methods in JavaScript?
59. What is an IIFE (Immediately Invoked Function Expression) in JavaScript?
60. What are JavaScript's data types and type conversion methods?
61. Explain the difference between Function.prototype.call() and Function.prototype.apply().
62. What is the difference between map() and forEach() in JavaScript?
63. How does async/await improve error handling over Promises?
64. What is the new keyword in JavaScript, and how is it used?
65. How do you use setPrototypeOf and getPrototypeOf in JavaScript?
66. What are JavaScript decorators, and how are they used?
67. What are polyfills in JavaScript, and when should you use them?
68. How does debouncing and throttling work in JavaScript?
69. What are default parameters, and how are they used in JavaScript functions?
70. Explain how JavaScript's fetch() API works.
71. What is the WeakMap object in JavaScript, and how does it differ from Map?
72. What is the WeakSet object in JavaScript, and how does it differ from Set?
73. How do Proxies and Reflect work in JavaScript?
74. What is the purpose of the eval function in JavaScript?
75. What is event delegation, and why is it useful?
76. What is the typeof operator in JavaScript, and how is it used?
77. How does the instanceof operator work in JavaScript?
78. What is NaN in JavaScript, and how do you check for it?
79. How do you create private variables in JavaScript?
80. What is the difference between undefined and undeclared variables in JavaScript?
81. How do you remove duplicates from an array in JavaScript?
82. What is the difference between synchronous and asynchronous exceptions?
83. How does JavaScript's Array.prototype.reduce() function work?
84. What is the difference between a function and a method in JavaScript?
85. How do you deep clone an object in JavaScript?
86. What are template literals, and what are their benefits?
87. What is the purpose of the hasOwnProperty() method in JavaScript?
88. What are mixins in JavaScript, and how are they implemented?
89. How does destructuring work with objects and arrays?
90. What is the purpose of the Object.freeze() method?
91. How does the Object.assign() method work?
92. What are JavaScript promises, and how do they work?
93. How do you handle errors in asynchronous code?
94. What is the Function constructor in JavaScript?
95. What is the difference between == and === in JavaScript?
*/