const createTodo = require("../../../model/createTodo")

const makeTodo=async(req,res)=>{
    const todoData=req.body;
    console.log('Received todo data:', todoData);
     
    const result= await createTodo.create(todoData)
    res.status(200).json(result)

}

module.exports= makeTodo