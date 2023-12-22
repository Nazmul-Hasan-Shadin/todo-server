const { Types } = require("mongoose");

const createTodo = require("../../../model/createTodo");


const deleteTodo=async(req,res)=>{
      try {
        const id= req.params.id;
        console.log(id);
        const query = { _id: new Types.ObjectId(id) };

  
         const result=await createTodo.deleteOne(query)
           res.json(result)
      } catch (error) {
        console.log(error);
      }

}

module.exports=deleteTodo