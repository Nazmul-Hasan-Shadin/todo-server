 require('dotenv').config()
const http= require('http')

const app= require('./src/app')

const getConnectToDb = require('./src/db/connectDb')

const server = http.createServer(app)
const port = process.env.PORT || 5001

 getConnectToDb()

server.listen(port,()=>{
    console.log('server is running')
})