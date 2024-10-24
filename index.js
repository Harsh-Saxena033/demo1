require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("hello")
})
app.get('/login',(req,res)=>{
    res.send("namaste")
})
app.listen(process.env.port , ()=>{
    console.log(`example port is listen ${port}`)
})