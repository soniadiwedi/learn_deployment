const express=require("express")
const { MovieModel } = require("../models/movie.model")
const router =express.Router()

router.post("/add",async(req,res)=>{
    const payload=req.body
    try{
        const data=new MovieModel(payload)
        await data.save()
        res.status(201).send(data)
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

module.exports={router}