// console.log(x) // undefined
// var x;
// console.log(y) // reference error
// let y; (let, const are same)

// hoisting

// var it will store the placeholder called => undefined
// console.log(x)
// var x; // declare
// x = 10; // initialize
// console.log(x)

// console.log(x)
// let x; // declaration
// console.log(x)

// let, const are hoisting only but it will in temporial dead zone till you initialize the value
sum();

function sum() {
console.log("normal function hositing")
}

sum1()
const sum1 = () => {
    console.log("arrow function hoisting")
}
