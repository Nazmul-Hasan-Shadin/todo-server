const express= require('express')
const makeTodo = require('../../api/Todo/Controller/makeTodo')
const getTodo = require('../../api/Todo/Controller/getTodo')
const updateTodo = require('../../api/Todo/Controller/updateTodo')
const deleteTodo = require('../../api/Todo/Controller/deleteTodo')
 
 const router= express.Router()

 router.post('/create-todo',makeTodo)
 router.get('/get-todo/:email' ,getTodo)
 router.patch('/update-todo/:id',updateTodo)
 router.delete('/todo-delete/:id',deleteTodo)

 module.exports=router

