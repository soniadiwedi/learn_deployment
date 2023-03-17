const mongoose=require("mongoose")


const todoSchema = mongoose.Schema({
    task:String,
    status:Boolean,
})
const TodoModel = mongoose.model("Todotask",todoSchema)
module.exports={TodoModel}