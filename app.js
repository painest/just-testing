const express = require('express')
const app = express()
const port = 3000 || process.env.PORT 
const MainRouters = require('./Routers/MainRouter')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/testapi', ()=>{
    console.log("connected")
},(e)=>{
    console.error(e)
})

app.use(MainRouters)
app.use(express.json())
app.get('/' , (req,res)=>{
    res.json({
        "stat" : "running"
    })

})


app.listen(port , ()=>{
    console.log(`Server is running in : http://localhost:3000`)
})