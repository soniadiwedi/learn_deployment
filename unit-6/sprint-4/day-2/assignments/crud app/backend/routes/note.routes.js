const express = require("express")
const noteRouter = express.Router()
const{NoteModel} = require("../model/note.model")



noteRouter.get("/",async(req,res)=>{
    //logic
    try{
        let data= await NoteModel.find()
        res.status(200).send(data)
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

noteRouter.post("/add",async(req,res)=>{
    //logic
    const data=req.body
    try{
        const note = new NoteModel(data)
        await note.save()
        res.status(200).send({"msg":"a New note has been added"})
    }catch(err){
        res.status(400).send({"msg":err.msg})
    }

})

noteRouter.delete("/delete/:id",async(req,res)=>{
    //logic
    const {id}=req.params
    try{
        await NoteModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"data has been deleted"})
    }catch(err){
        res.status(400).send({"msg":err.msg})
    }
})


noteRouter.patch("/update/:id",async(req,res)=>{
    //logic
    const {id}=req.params
    const data=req.body
    try{
        await NoteModel.findByIdAndUpdate({_id:id},data)
        res.status(200).send({"msg":"data has been updated"})
    }catch(err){
        res.status(400).send({"msg":err.msg})
    }
})

module.exports={noteRouter}