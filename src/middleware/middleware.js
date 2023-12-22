const express= require('express')
const cors= require('cors')

const applaymiddleware=(app)=>{
     app.use(cors({
        origin:'http://localhost:5173',
      //   origin: 'https://todo-app-4489c.web.app',
        credentials:true
     }))


     app.use(express.json())


}

module.exports=applaymiddleware

