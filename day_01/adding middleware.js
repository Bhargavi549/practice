//middleware : middleware is a like a helper that recives req and res objects to the application
//client send the request to the server middle ware process request all the conditions are satisfied request send to server through routes ,server gives response
// routes: specific path or url to the function(endpoint)

//Middleware is software that acts as an intermediary between different applications, systems, or components, enabling communication and data management. 
//It facilitates functions like authentication, logging, and request handling in application development.

//Middleware in Express.js is a function that has access to the req (request), res (response), and next objects. It is used to execute code, modify requests/responses, and terminate the request-response cycle or pass control to the next middleware.

//authentication is the process of verifying users data.


const express = require('express');

const app = express()

const port = 8555

// middleware condition:
// app.use((req,res,next)=>{
//     if(10<20){    // condition is true routes will exicute
//         next()    // consition false buffering is happended res not came
//     }
// })

// assign middle ware to variable:

const firstHandler = ((req,res,next)=>{
    if(10>20){
        next()
    }else {
        console.log("not allowed") // print on inspect
    }
}) // we can apply this middle ware in specific rout

app.get('/home',firstHandler, (req,res)=>{
    res.send("home page")
})

app.get('/login', (req,res)=>{
    res.send("login page")
})

app.listen(port, () => console.log(`Server running on ${port}`));