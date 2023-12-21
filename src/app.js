const express= require('express')
const applaymiddleware = require('./middleware/middleware')
const getConnectToDb = require('./db/connectDb')
const app= express()

applaymiddleware(app)





app.get('/health',(req,res)=>{
    res.send('server is running')
})

app.all('*',(req,res,next)=>{
    const error= new Error(`Ther reqused url is invaild ${[req.url]}`)
    next(error)
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        message:err.message
    })
 })

 getConnectToDb()

 module.exports=app