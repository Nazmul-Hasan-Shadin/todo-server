const { default: mongoose } = require("mongoose");
const createTodo = require("../../../model/createTodo");

const updateTodo=async(req,res)=>{
    const id= req.params.id
    const updatedStatus= req.body;

    const finalUpdate= {
        $set:{
            status:updatedStatus.status
        }
    }
  

    const result= await createTodo.updateOne({_id: new mongoose.Types.ObjectId(id)},finalUpdate )


    res.json(result)
}

module.exports=updateTodo