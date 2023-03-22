const express=require("express")
const { UserModel, ProductModel } = require("./model")
const userRouter=express.Router()
const postRouter=express.Router()
const jwt=require("jsonwebtoken")
const { authMiddleware } = require("./token.middleware")



userRouter.post("/register",async(req,res)=>{
  const data=req.body  
  try{
    const newuser=new UserModel(data)
    await newuser.save()
    res.status(200).send({"msg":"user registration succssefull"})
  }catch(err){
    res.status(400).send({"msg":err.message})
  }
})


userRouter.post("/login",async(req,res)=>{
  const {email,password}=req.body
  try{
    const user=await UserModel.find({email,password})
    user.length>0 ? res.status(200).send({"msg":"Login Sucessfull","token" : jwt.sign({name:"sonia"},"swati",{expiresIn:"1h"})}) :res.status(200).send({"msg":"Login failed"})
  }catch(err){
    res.status(400).send({"msg":err.message})
  }
})


postRouter.get("/product",async(req,res)=>{
  try{
   let data= await ProductModel.find()
    res.status(200).send(data)
  }catch(err){
    res.status(400).send({"msg":err.message})
  }
})


postRouter.post("/addProduct",authMiddleware,async(req,res)=>{
  const data=req.body
  try{
    const newproduct=ProductModel(data)
    await newproduct.save()
    res.status(200).send({"msg":"product added"})

  }catch(err){
    res.status(400).send({"msg":err.message})
  }
})


postRouter.patch("/editProduct/:id",authMiddleware,async(req,res)=>{
  const id=req.params.id
  const data=req.body
  try{
    await ProductModel.findByIdAndUpdate({_id:id},data)
    res.status(200).send({"msg":"product has been edit"})

  }catch(err){
    res.status(400).send({"msg":err.message})

  }
})

postRouter.delete("/delete/:id",authMiddleware,async(req,res)=>{
  const id=req.params.id
  try{
    await ProductModel.findByIdAndDelete({_id:id})
    res.status(200).send({"msg":"product has been deleted"})
  }catch(err){
    res.status(400).send({"msg":err.message})

  }
})

module.exports={userRouter,postRouter}