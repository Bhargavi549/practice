// let :declares new variable inside blocks only defined
function let(){
    let x = 1;
    if(true){
        let x=2;
        console.log(x); //o/p:2
    }
    console.log(x);  // 1
}
// var : declare new variable thoughtout the function declared.
function varexample(){
    var x=1;
    if(true){
        var x=2;
        console.log(x); //2
    }
    console.log(x); // 2
}
//onces you declare variable with var and let you can reassign new value but with const you cann't reassign new value

let name  = "john"  
let score = "100"   // any thing inside quotes is a string
console.log(name)  // john

let firstName = "bhargavi"
firstName = "Bharu" // re assigned
let lastName = "dora"
let fullName = firstName + ' ' + lastName
console.log(fullName) //Bharu dora

//fahrenheit to celius converter 
let temInFahrenheit = 100
let celius = (temInFahrenheit-32)*5/9
console.log(celius);

