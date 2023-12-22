const createTodo = require("../../../model/createTodo")

const getTodo=async(req,res)=>{
     const query= req.params.email
     console.log(query);
    const result = await createTodo.find({email:query})
     res.json(result)

}

module.exports=getTodo