const createTodo = require("../../../model/createTodo")

const makeTodo=async(req,res)=>{
    const todoData= req.body
   
     try {
        if (!todoData.desc || !todoData.email) {
            return res.status(404).json({error:'Description or email required'})
        }
       console.log('Received todo data:', todoData);
        
       const result= await createTodo.create(todoData)
       res.status(200).json(result)
     } 
     
     catch (error) {
        console.log(error);
     }

}

module.exports= makeTodo