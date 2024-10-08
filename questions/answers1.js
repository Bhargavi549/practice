// 1. What is JavaScript?
// Ans: javascript is a syncronous single threaded--->one thing do at a time with specific order 
// it is used in both client side and server side to create web applications

// 2. How do you include JavaScript in an HTML file?
// You can include JavaScript within the HTML file by placing it inside a <script> tag 

// 3. What are the different data types in JavaScript?
// 1. primitive  2. non-primitive
// primitive:
// number --->Represents integer and floating points  ex: 2, 2.5
// string --->Reprasents character ex: "hello", 'world'
// boolean ---> logic values ex:true,false
// null ---> no values ex: 
    let A = null
// bigInt --->both lettersand numbers ex: 
    let bigInt = 3456780n
// undefined---> variable declared but not assigned  ex: 
    let y;
    console.log(y);
//   Non-primitives:
// Object ---> collection of key value pair ex: 
    let x = {name:"A", age:20}
// Array ---> multiple values are stored in single variable 
    let num = [1,2,3,4]
// function --->it performs tasks 
    function sample(){
        console.log("hello world");
    }

//4. How do you declare a variable in JavaScript?    
// javascript you can declare variable using this keywords let,var, const

//5. What is the difference between var, let, and const?
// blocked scope: all the variables and function accessed inside blocks
// --->let and const are the blocked scopes and var is global scope
// let: inside block defined
// var: thoughtout the block defined
// const: let and var we can redeclare but const we cannot
function letVariable (){
    let x = 2;
    if(true){
        let x = 4;
        console.log("let scope",x);
    }
    console.log(x);
}
letVariable()
 function varVariable(){
    var y = 1;
    if(true){
        var y = 3;
        console.log(y)
    }
    console.log(y);
 }
 varVariable()

 const exp = 23456
 exp = 890
 console.log(exp);

const s = [1,2,3,4]
s.push(5)
console.log(s);


//6. How do you create a string in JavaScript?
// you can create strings using single quotes('') and double quotes("") and templateLiteral(``)

//7. What is the difference between == and ===?
// == ---> it checks only values 
   2=="2"
// === ---> it checks values and types  of the operand
   2==="2"

//9. How do you create an array in JavaScript?
// multile values stored in single variable.
const array = [element1, element2, element3];
const colors = Array.of('red', 'green', 'blue');

//10. How do you access an element in an array?
//In JavaScript, you can access an element in an array using its index, indexes are starts from 0;
const persons = ["sai","ali","trini"];
console.log(persons[0])

// 11. How do you add an element to an array?
// using push
let numbers = [1,2,3]
numbers.push(4);
console.log(numbers);

// 12. How do you remove the last element from an array?
// using pop
let number = [1,2,3,4]
number.pop();

// 13. What is a function in JavaScript?
// a function in javascript is a block of code designed to perform specific task
// function can take input in the form of parameters, and they can return a value after processing.

// 14. How do you call a function in JavaScript?
function greet(name) {
    console.log('Hello, ' + name + '!');
}
greet('Alice'); // Output: Hello, Alice!

//15. What is an object in JavaScript?
//An object in JavaScript is a complex data structure that allows you to store collections of key-value pairs.
let person = {name: "ali",age:30}

//16.How do you access a property in an object?
// Dot notation  2.bracket notation
console.log(person.name);
console.log(person["name"]);

// 17. How do you add a property to an object?
person.height = 150;
person["weight"] = 60;

//18. What is the purpose of return in a function?
//The return statement immediately stops the execution of the function. Any code written after the return statement within the same function will not be executed.

//19.What is the difference between null and undefined?
//A variable that has been declared but not initialized will have the value undefined
let value;
console.log(value); // undefined (value is declared but not assigned a value)

function greet(name) {
    console.log(name);
}
greet(); // undefined (no argument is provided)

let person = {};
console.log(person.age); // undefined (age property does not exist)

// 20.How do you create a conditional statement in JavaScript?
// if: The if statement is used to execute a block of code if a specified condition is true.
let personage = 18;

if (personage >= 18) {
    console.log("You are an adult.");
}

// if...else
let age3 = 16;

if (age3 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// if...else if...else
//The else if statement is used to specify a new condition to test if the first condition is false.
let age1 = 20;
if (age1 < 13) {
    console.log("You are a child.");
} else if (age1 >= 13 && age1 < 18) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}

// switch
//The switch statement is used to perform different actions based on different conditions. It is often used when you have multiple possible values for a single variable.
let fruit1 = "apple";
switch (fruit1) {
    case "apple":
        console.log("You selected an apple.");
        break;
    case "banana":
        console.log("You selected a banana.");
        break;
    case "orange":
        console.log("You selected an orange.");
        break;
    default:
        console.log("Unknown fruit.");
}

// ternary: The ternary operator is a shorthand way of writing an if-else statement.
let age2 = 20;
let message = age2 >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);
 
// 21. How do you create a loop in JavaScript?
// 22. What is the difference between for, while, and do...while loops?
// 23. How do you break out of a loop?
// 24. How do you continue to the next iteration in a loop?
// 61. What is for...in loop?
// 62. What is for...of loop?

//25. What is an event in JavaScript? 
// user interaction, changes in the state of application ex: drag mouse and clicking.

// 27. What is this keyword in JavaScript?

// 28. How do you use the Date object in JavaScript?
//The Date object in JavaScript is used to work with dates and times. You can create instances of the Date object to represent a specific date and time or to manipulate dates and times.
//current date and time
const now = new Date();
console.log(now);

// 29. How do you generate a random number in JavaScript?
// generate random numbers using Math.random()
const randomNumber = Math.random();
console.log(randomNumber); // Example: 0.726473893

// 30. What is a callback function?
// a callback function called at a completion of given task and this privents any blockings another code need to be run in amean time.


// 31. How do you handle errors in JavaScript?
// using try catch mathod
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        const result = a / b;
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}
// Test the function
divideNumbers(10, 2); // Outputs: Result: 5
divideNumbers(10, 0); // Outputs: Error: Cannot divide by zero

// 32. What are template literals?
// template literals are using(``) it allows multiline strings using ${} we can write your expressions.
const name = 'Alice';
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Outputs: Hello, my name is Alice and I am 25 years old.

// 33. How do you use the map function in JavaScript?
// creates a new array by using the existing one. modify each element of the array
const element = [1, 2, 3, 4, 5];
const squares = element.map(function(number) {
    return number * number;
});
console.log(squares); // Output: [1, 4, 9, 16, 25]

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
const names = users.map(user => user.name);
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

//34. What is the difference between map and forEach?
// both are same these two methods are used for modification and iteration
// usinging for ech we will get list of numbers not in array elements
const res = element.forEach((num)=>num*2);
console.log(res); // 1,4,9,16,25

// 35. How do you use the filter function in JavaScript?
// The filter() function in JavaScript is used to create a new array with all the elements that pass a test provided by a callback function. 
// It filters out elements that do not meet the condition specified in the callback function, and only includes elements that return true for the test.
const numeric = [5, 10, 15, 20, 25];
const filteredNumbers = numeric.filter(number => number >= 10);
console.log(filteredNumbers); // Output: [10, 15, 20, 25]

// 36. What is the difference between filter and map?
// map : Purpose: The map() function is used to create a new array by applying a function to each element of the original array. 
// filter() : Purpose: The filter() function is used to create a new array containing only the elements that pass a specific test or condition. 

// 37. How do you use the reduce function in JavaScript?
// The reduce() function in JavaScript is a powerful array method used to reduce an array to a single value by executing a reducer function on each element of the array. 
const number123 = [1, 2, 3, 4, 5];
const sum = number123.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);  // Output: 15

// 38. What is typeof operator?
//determining the data type of values in JavaScript.
console.log(typeof 42);          // "number"
console.log(typeof 'hello');     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (this is a historical quirk in JavaScript)

// 39. How do you convert a string to a number in JavaScript?
//Using Number() Function:
const str = "42";
const num1 = Number(str);
console.log(num1); // Outputs: 42 (as a number)
//Using parseInt() Function:
const str2 = "42";
const num2 = parseInt(str2, 10); // The second argument specifies the base (10 for decimal)
console.log(num2); // Outputs: 42
//Using Unary Plus (+): 
const str3 = "42";
const num3 = +str3;
console.log(num3); // Outputs: 42
//Using parseFloat() Function: 
const str4 = "42.73";
const num4 = parseFloat(str4);
console.log(num4); // Outputs: 42.73

// 40. How do you convert a number to a string in JavaScript?
//Using String() Function: 
const num5 = 42;
const str5 = String(num5);
console.log(str5); // Outputs: "42" (as a string)
//Using String Concatenation:
const num6 = 42;
const str6 = num6 + "";
console.log(str6);
//Using toString() Method: 
const num7 = 42;
const str7 = num7.toString();
console.log(str7); // Outputs: "42"

// 41. What is NaN?
//NaN stands for "Not-a-Number" and is a special value in JavaScript 
console.log(typeof NaN); // "number"
//Common Causes of NaN:Invalid Mathematical Operations
console.log(0 / 0); // NaN
console.log(Math.sqrt(-1)); // NaN

// 42. How do you check if a variable is NaN?
const value1 = NaN;
const value2 = 'string';
const value3 = 42;
console.log(isNaN(value1)); // Output: true
console.log(isNaN(value2)); // Output: true (because 'string' is not a number)
console.log(isNaN(value3)); // Output: false

// 43. What is Infinity in JavaScript?
//In JavaScript, Infinity is a special numeric value that represents positive infinity. It is a property of the global Number object and is typically used to represent values that exceed the upper limit of JavaScript's number range. There's also -Infinity, which represents negative infinity.
//Positive Infinity (Infinity): Represents a value that is greater than any other number.
console.log(Infinity > 1e308); // true
//Negative Infinity (-Infinity): Represents a value that is less than any other number.
console.log(-Infinity < -1e308); // true
//Infinity Occur
console.log(1 / 0); // Infinity

/*44. What is a Promise in JavaScript?
it manging asyncronous operations and handels callback hell and unreachable code. 
States of a Promise: A Promise has three possible states:
Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
Creating a Promise: 
A Promise is created using the Promise constructor, which takes a function (known as the executor) with two arguments: resolve and reject.
resolve(value) is called when the operation is successful.
reject(reason) is called when the operation fails */
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulating an operation

    if (success) {
        resolve("Operation was successful");
    } else {
        reject("Operation failed");
    }
});
//handel promises
myPromise
    .then(
        (result) => {
            console.log(result); // "Operation was successful"
        },
        (error) => {
            console.log(error); // "Operation failed"
        }
    );

// 45. How do you create a Promise in JavaScript?
const fetchData = new Promise((resolve, reject) => {
    const success = true; // Simulating an operation's outcome

    setTimeout(() => {
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error: Data fetch failed.");
        }
    }, 2000); // Simulate a 2-second delay
});

fetchData
    .then((result) => {
        console.log(result); // "Data fetched successfully!" (after 2 seconds)
    })
    .catch((error) => {
        console.error(error); // "Error: Data fetch failed." (if success was false)
    });

/* 46. What is async and await in JavaScript?
async Function: A function that returns a Promise. It allows the use of await inside.
await Keyword: Pauses execution of the async function, waiting for a Promise to resolve or reject.
Error Handling: Use try...catch within an async function to handle errors.*/
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched after 2 seconds");
        }, 2000);
    });
}

async function displayData() {
    console.log("Fetching data...");
    const data = await fetchData(); // Waits until fetchData resolves
    console.log(data); // "Data fetched after 2 seconds"
}
displayData();

// 47. How do you use JSON in JavaScript?
//JSON is commonly used in web development for data exchange between a server and client, and for storing data in the browser. It’s a fundamental part of working with modern web applications.

// 48. What is the JSON.stringify method?
// JSON.stringify(): Converts a JavaScript object into a JSON string.
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
const jsonString = JSON.stringify(person);
console.log(jsonString);
// Output: '{"name":"John","age":30,"city":"New York"}'

// 49. What is the JSON.parse method?
// JSON.parse(): Converts a JSON string into a JavaScript object.
const jsonStrings = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonStrings);
console.log(jsonObject.name); // "John"
console.log(jsonObject.age);  // 30

// 50. How do you use localStorage in JavaScript?
// to store data on the client side.
//to store data:
localStorage.setItem('key','value');
// retrive the data:
const storage = localStorage.getItem('key');
console.log(storage);

// 51. What is the difference between localStorage and sessionStorage?
// both are used for web storages
// localstorage: even browser  closed also users data stored and responded.
// sessionStorage:  browser open data will respond if the brower close not responded untill repoen the browser 

// 52. How do you check the length of a string in JavaScript?
const string = "hello";
const stringLength = string.length
console.log(stringLength);

// 53. How do you split a string in JavaScript?
const word = "hello world";
const splitWord = word.split("");
console.log(splitWord)
//o/p:[
//   'h', 'e', 'l', 'l',
//   'o', ' ', 'w', 'o',
//   'r', 'l', 'd'
// ]
const word1 = "hello world";
const splitWord1 = word.split(" ");
console.log(splitWord1)             //output: [ 'hello', 'world' ]

// 54. How do you join an array into a string in JavaScript?
const fruits = ["apple", "banana", "cherry"];
const fruitString = fruits.join(" , ");
console.log(fruitString);          //output: apple , banana , cherry

// 55. What is Math object in JavaScript?
//The Math object in JavaScript is a built-in object that provides a set of mathematical functions

// 56. How do you round a number in JavaScript?
console.log(Math.round(4.2)) // 5

// 57. How do you find the maximum and minimum values in an array?
const values = [1,2,3,4];
const maxValue = Math.max(...values);
console.log(maxValue); // 4
const minValue = Math.min(...values);
console.log(minValue); // 1

// 58. How do you sort an array in JavaScript?
// Sorting an Array of Strings : The sort() method sorts an array of strings alphabetically by default.
const fruit = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruit); // Output: ["apple", "banana", "cherry"]

const numberes = [10, 1, 21, 2];
numbers.sort();
console.log(numberes); // Output: [1, 10, 2, 21]

const numbers1 = [10, 1, 21, 2];
numbers.sort((a, b) => a - b);
console.log(numbers1);  // Output: [1, 2, 10, 21]

// 59. How do you reverse an array in JavaScript?
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = [...originalArray].reverse();
console.log(originalArray);    // Output: [1, 2, 3, 4, 5]
console.log(reversedArray);    // Output: [5, 4, 3, 2, 1]

// 60. How do you find an element in an array?
//find(): Returns the first element that matches a condition.
const a = [1, 2, 3, 4, 5];
const found = a.find(num => num > 3);
console.log(found); // Output: 4
// filter(): Returns an array of all elements that match a condition.
const N = [1, 2, 3, 4, 5];
const filtered = N.filter(num => num > 3);
console.log(filtered); // Output: [4, 5]
// indexOf(): Finds the index of the first occurrence of an element.
const f = ["apple", "banana", "cherry"];
const index = f.indexOf("banana");
console.log(index); // Output: 1
console.log(f[index]); // Output: "banana"
// includes(): Checks if an element exists in the array.
const z = ["apple", "banana", "cherry"];
const hasBanana = z.includes("banana");
console.log(hasBanana); // Output: true
// findIndex(): Returns the index of the first element that matches a condition.
const n = [1, 2, 3, 4, 5];
const Index = n.findIndex(num => num > 3);
console.log(Index); // Output: 3
console.log(n[Index]); // Output: 4

// 63. What is an anonymous function in JavaScript?
//In JavaScript, an anonymous function is a function that does not have a name.
(function() {
    console.log("This is an IIFE.");
})();

const greet = function() {
    console.log("Hello, world!");
};
greet(); // Output: Hello, world!

// 65. What is setTimeout function?
// setTimeout: Schedules a function to be executed after a specified delay.
setTimeout(() => {
    console.log("This message appears after 3 seconds");
}, 3000);

//cleartimeout:
const timmer = setTimeout(endFunction,3000);
console.log("start");
clearTimeout(timmer);
function endFunction(){
    console.log("end");
}

// 66. How do you use setInterval function?
// function: The function to be executed repeatedly.
let counter = 0;
const intervalId = setInterval(() => {
    counter += 1;
    console.log("Counter:", counter);

    if (counter === 5) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1000);
// Counter: 1
// Counter: 2
// Counter: 3
// Counter: 4
// Counter: 5
// Interval stopped

// 69. How do you check if a variable is an array?
const p = [1, 2, 3, 4, 5];
const p1 = "Alice";
console.log(Array.isArray(p));     // Output: true
console.log(Array.isArray(p1));    // Output: false

// 70. What is the instanceof operator?
//  instanceOf operator in javascript is used to check if an object is an instance of particular contructor or class.
Object instanceof constructor

// 72. What is strict mode in JavaScript?
// Strict Mode: A feature in JavaScript that enables a stricter parsing and error handling in your code.
"use strict";
x = 10;      // ReferenceError: x is not defined
// not allows duplicate parameters
function sum(a, a, c) {
    return a + b + c; // SyntaxError in strict mode
}

// 73. How do you use eval in JavaScript?
// read evalute printed loop.
const code = "2 + 2";
const result = eval(code);
console.log(result); // Output: 4

// 74. What is the bind method in JavaScript?
// it gives the copy and invoke later.
// const boundFunction = function.bind(thisArg, arg1, arg2, ...);

// 75. How do you use call and apply methods?
// Syntax: function.call(thisArg, arg1, arg2, ...)
// The call() method calls a function with a given this value and arguments provided individually.
const printMyName = printFullName.bind(name1, "kurnool"); 
console.log(printMyName);
// Syntax: function.apply(thisArg, [argsArray])
// The apply() method is similar to call(), but it takes the function arguments as an array.
let name1 = {
    firstname: "bhargavi",
    lastname:"dora",
 //    printFullName: function(){
 //     console.log(this.firstname + " " + this.lastname)
 //    }
 }
 //name1.printFullName();
 let  printFullName = function(town){
         console.log(this.firstname + " " + this.lastname+ " , " + town)
     }
 // function borrowing    
 printFullName.call(name1, "kurnool");   // call method we can pass aruguments camma seperated 

 let name2 = {
     firstname: "virat",
     lastname: "kohli",
 }
 //names.printFullName.call(names2)
 printFullName.call(name2,"nellore")
 printFullName.apply(name2,["nellore"]) // apply we can pass arguments using [] array list

// 76. What is an arrow function?
// shortest syntex, code should be clean and clear.
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// 77. How do you use default parameters in JavaScript?
function myFn(name,age=16){
    console.log(`hi ${name} what is your${age}`)
}
console.log(myFn("sai"));

// 78. What is destructuring in JavaScript?
//Array destructuring allows you to unpack values from arrays.
const arrays = [1,2,3];
const [k,l,m] = arrays
console.log(k)  // 1
console.log(l)  // 2
console.log(m)  //3
//Object destructuring allows you to unpack values from objects.
const person = {
    username: "Alice",
    userage: 25,
    city: "New York"
};
const { username, userage } = person;
console.log(username); // Output: Alice
console.log(userage);  // Output: 25

// 79. How do you use spread operator in JavaScript?
// copy the values from one state to another state
const elements = [1,2,3,4];
const copyElements = [...elements]
console.log(copyElements);

// 80. How do you use rest operator in JavaScript?
//The rest operator is used to collect all remaining arguments passed to a function into an array.
const b = [1, 2, 3, 4, 5];
const [first, second, ...rest] = b;
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]

// 90. What is event bubbling?
// 91. What is event capturing?
//// 7. What is event delegation?

// 92. How do you stop event propagation?

// 93. What is preventDefault method?

// 94. How do you clone an object in JavaScript?
// to copy the objects using spread operator and Object.assign({})

// 95. What is the difference between deep copy and shallow copy?
const original = { name: 'John', address: { city: 'New York' } };
// Create a shallow copy using Object.assign or spread operator
const shallowCopy = { ...original };
// Modify the nested object
shallowCopy.address.city = 'Los Angeles';
console.log(original.address.city); // Output: 'Los Angeles'

const original1 = { name: 'John', address: { city: 'New York' } };

// Create a deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original1));
// Modify the nested object
deepCopy.address.city = 'Los Angeles';
console.log(original1.address.city); // Output: 'New York'


// 96. How do you merge two objects?
const person = { name: 'Alice', age: 25 };
const contact = { email: 'alice@example.com', phone: '123-456-7890' };
const mergedObject = { ...person, ...contact };
console.log(mergedObject);
// Output: { name: 'Alice', age: 25, email: 'alice@example.com', phone: '123-456-7890' }

// 97. How do you merge two arrays?
const frui = ['apple', 'banana'];
const moreFruits = ['orange', 'mango'];
const allFruits = [...frui, ...moreFruits];
console.log(allFruits);    // Output: ['apple', 'banana', 'orange', 'mango']

const fruites = ['apple', 'banana'];
const moreFruit = ['orange', 'mango'];
const allFruit = fruites.concat(moreFruits);
console.log(allFruits);    // Output: ['apple', 'banana', 'orange', 'mango']

// 98. What is RegExp in JavaScript?
// 99. How do you create a regular expression in JavaScript?
// 00. How do you test a regular expression in JavaScript?