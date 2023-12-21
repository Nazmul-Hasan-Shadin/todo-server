const express= require('express')
const makeTodo = require('../../api/Todo/Controller/makeTodo')
 
 const router= express.Router()

 router.post('/create-todo',makeTodo)

 module.exports=router

