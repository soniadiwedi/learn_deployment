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


// router.get("/",async(req,res)=>{
//     try{
//         const {min,max,year_of_release}
//     }
// })


router.get("/:id",async(req,res)=>{
    const {id}=req.params
    try{
        let movie=await MovieModel.findById(id)
        res.status(200).send({movie})
    }catch(err){
        res.status(500).send("server error")
    }
})


router.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    const data=req.body
    try{
        await MovieModel.findByIdAndUpdate({_id:id},data)
        res.status(200).send({"msg":"movie has been updated"})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})
module.exports={router}