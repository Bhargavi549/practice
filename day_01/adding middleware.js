//middleware : middleware is a like a helper that recives req and res objects to the application
//client send the request to the server middle ware process request all the conditions are satisfied request send to server through routes ,server gives response
// routes: specific path or url to the function(endpoint)


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