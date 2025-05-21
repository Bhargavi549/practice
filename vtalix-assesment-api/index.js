const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require("./src/routes/router")
const cors = require('cors');
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors())

const initiaization = async()=>{
    const connection = mongoose.connect(process.env.MONOOSE_URL);
    connection.then(async()=>{
        console.log("........mongoose connected");
        const PORT = process.env.PORT || 8080
        app.listen(PORT,()=>{
            console.log(`server running on ${PORT}`);
        });
        app.use(routes)
    }).catch(async(err)=>{
        console.log(err);
    })
}
initiaization();

// const express = require('express');
// const dotenv = require('dotenv');
// const app = express();
// const userRoutes = require('./src/routes/router');

// dotenv.config();
// app.use(express.json());
// app.use('',userRoutes);

// const PORT = 8080;
// app.listen(PORT,()=>{
//     console.log(`server running on ${PORT}`)
// })