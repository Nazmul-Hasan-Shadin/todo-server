const { Schema, default: mongoose } = require("mongoose");

const schema= new Schema({
    desc: {
        type:String,
        required:true
    }
})

const createTodo= mongoose.model('todos',schema)
module.exports= createTodo

