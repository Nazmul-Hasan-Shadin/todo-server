const express= require('express')
const applaymiddleware = require('./middleware/middleware')
const getConnectToDb = require('./db/connectDb')

const port= process.env.PORT || 5001;
const app= express()

applaymiddleware(app)

const createTodoRouter= require('./router/createTodo/index')

app.use(createTodoRouter)











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



app.listen(port,()=>{
    console.log('server is running');
    getConnectToDb()
})



 module.exports=app