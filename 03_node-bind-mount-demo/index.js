const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
//  changes from container
const app = express();

app.get('/home', (req, res)=>{
    return res.json({
        message: "homeComing"
    })
})

app.get('/info', (req, res)=>{
    return res.json({message: 'info'}); 
})

app.get('/about', (req, res)=>{
    return res.json({message: 'about'});
})
app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})
