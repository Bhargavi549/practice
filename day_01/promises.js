// Here's an example of a promise that takes an API URL and fetches the data:

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// This function takes a URL as an argument and returns a promise that:

// 1. Makes a GET request to the URL using fetch()
// 2. Parses the response as JSON using response.json()
// 3. Resolves the promise with the parsed data if the request is successful
// 4. Rejects the promise with the error if the request fails

// You can use this function like this:

fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Note that this is a simple example, and you may want to add additional error handling or configuration options depending on your specific use case.

// Also, you can use async/await syntax to make it look more synchronous:

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}


try {
  const data = await fetchData('https://api.example.com/data');
  console.log(data);
} catch (error) {
  console.error(error);
}



// const arr = [5, 2, 3, 1]

// arr.map((i) => {
//   // any logic
//   // console.log(i)
// })

// const results = arr.filter((i)=> i >= 2)
// console.log("results", results)

// const fruits = ["applwefqwetwee", "banana", "mango"]

// const res1 = fruits.filter((i)=> i.length > 5 && i.includes("a") )
// console.log("res1", res1)

// const sortedArr = arr.sort((a, b)=>a-b)
// console.log("sortedArr", sortedArr)