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

//6. How do you create a string in JavaScript?
// you can create strings using single quotes('') and double quotes("") and templateLiteral(``)

//7. What is the difference between == and ===?
// == ---> it checks only values 
   2=="2"
// === ---> it checks values and types  
   2==="2"

//9. How do you create an array in JavaScript?



//10. How do you access an element in an array?
//In JavaScript, you can access an element in an array using its index, indexes are starts from 0;

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
// if
// if...else
// if...else if...else
// switch
// ternary




// 21. How do you create a loop in JavaScript?
// 22. What is the difference between for, while, and do...while loops?
// 23. How do you break out of a loop?
// 24. How do you continue to the next iteration in a loop?

//25. What is an event in JavaScript? 
// user interaction, changes in the state of application ex: drag mouse and clicking.

// 26. How do you attach an event handler to an HTML element?
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
// call back function examle:



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
//Template literals are a feature in JavaScript introduced in ES6,instead of single or double quotes and offer several advantages over regular strings 
const name = 'Alice';
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Outputs: Hello, my name is Alice and I am 25 years old.

// 33. How do you use the map function in JavaScript?
// 34. What is the difference between map and forEach?
// 35. How do you use the filter function in JavaScript?
// 36. What is the difference between filter and map?
// 37. How do you use the reduce function in JavaScript?


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
// 42. How do you check if a variable is NaN?
// 43. What is Infinity in JavaScript?
// 44. What is a Promise in JavaScript?
// 45. How do you create a Promise in JavaScript?
// 46. What is async and await in JavaScript?
// 47. How do you use JSON in JavaScript?
// 48. What is the JSON.stringify method?
// 49. What is the JSON.parse method?
