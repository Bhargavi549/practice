// 1.what is javascript?
// ans:- javascript is a open source programming language.it is design for creating web applications which much faster than
//  other languages. javascript is integrated with HTML. which makes it easier to implement javascript in web 
//  application.

//syncronous single threaded----->one task can do at a time in aspecific order.

//sorting Array:
const arr = [1,6,4,2,5]
function sortArray (arr){
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i]= arr[j];
                arr[j]= temp;
            }
        }
    }
    return arr
}
console.log(sortArray(arr));

//sorting using inbuilt method
const num = [1,6,4,2,5];
num.sort((a,b)=>a-b);
console.log(num);


//array duplicates:
const array = [1,1,2,2,3,3];
function removeDuplicates(arr){
   return arr.filter((item,index)=> arr.indexOf(item)!==index);
}
console.log(removeDuplicates(array));

//find min and max an array:
let value = [5,6,8,2,3,1];
let mavValue = Math.max(...value);
console.log(mavValue);
let minValue = Math.min(...value);
console.log(minValue);

//second largest value
const numbers = [2,3,5,6,8,1];
function secondLargestNumber (arr){
    const res = arr.filter((item,index)=>arr.indexOf(item)!==index)
    res.sort((a,b)=>b-a);
    return arr[1];
}
console.log(secondLargestNumber(numbers))


//reverse of a string:
let text = "bhargavi";
function reveseString(str){
    return str.split('').reverse().join('');
}
console.log(reveseString(text));

// reverse array without using reverse keyword
function reverseString(arr){
    let reversed = [];
    for(i=arr.length-1;i>=0;i--){
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseString([1,2,3,4,5]));

//using reverse
const arr1 = [1, 2, 3, 4, 5];
const reversedArr = arr1.reverse();

console.log(reversedArr);

//find missing numbers:
const number = [1,2,3,4,6,7];
function missingNumber(arr){
    arr.sort((a,b)=>a-b);
for(let i=0;i<arr.length;i++){
  if(arr[i]!==i+1){
    return i+1
  }  
}
return arr.length+1;
}
console.log(missingNumber(number))


//palindrome or not:
function palindrome(str){
    return str === str.split('').reverse().join('');
}
let string = "racecar"
console.log(palindrome(string));

//sum of array
const sum = [1,3,5,6,8]
function sumArray(arr){
    return arr.reduce((sum,num)=>sum+num)
}
console.log(sumArray(sum));
