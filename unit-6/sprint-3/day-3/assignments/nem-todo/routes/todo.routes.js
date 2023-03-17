 const express=require("express")
const { TodoModel } = require("../model/todo.model")

 const todoRouter=express.Router()



// //-----create

todoRouter.post("/create",async(req,res)=>{
    const payload = req.body
    try{
        const todos= new TodoModel(payload)
        await todos.save()
        res.status(200).send({"message":"New Todo has been added"})
    }catch(err){
        res.status(400).send({"message":err.message})
    }
})

// -------read

todoRouter.get("/",async(req,res)=>{
    const q=req.query
    try{
        const todo=await TodoModel.find(q)
        res.status(200).send(todo)
        
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})


//-------------update

todoRouter.patch("/edit/:id",async(req,res)=>{
    const id=req.params.id
    const data=req.body
    try{
        await TodoModel.findByIdAndUpdate({_id:id},data)
        res.status(200).send({"msg":"Todo updated"})
    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

//-----------delete
todoRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try{
        await TodoModel.findByIdAndDelete({_id:id})
        res.status(200).send({"message":"Todo has been Deleted"})
    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

 module.exports={todoRouter}




