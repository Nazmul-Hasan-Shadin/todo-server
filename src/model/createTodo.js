const { Schema, default: mongoose } = require("mongoose");

const schema= new Schema({
    desc: {
        type:String,
        required:true,
      
    },
    email:{
        type: String,
        required:true,
       
    },
    title: String,
    deadLine: String,
    workLevel: String,
    status: String
})

const createTodo= mongoose.model('todos',schema)
module.exports= createTodo

