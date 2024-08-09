// higher order function


const arr = [1, 2, 3, 4]

// map ==> it will iterate throguth the array and returns the new arry, it doesn't modify the original array

const results = arr.map((num) => {
    return num + num
})

console.log("results", results)
console.log("original", arr)

const filterArr = arr.filter((i)=>{
    return i > 5
})

console.log("filterArr", filterArr)
console.log("original", arr)