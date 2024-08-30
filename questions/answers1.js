// please write your answers with examples you can write morethan 1 examples please

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