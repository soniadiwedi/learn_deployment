const express = require("express")
const {UserModel} = require("../model/user_models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userRouter = express.Router()


userRouter.post("/register",async(req,res)=>{
    const{email,pass,location,age}=req.body
    try{
        bcrypt.hash(pass,5,async(err, hash) =>{
            // Store hash in your password DB.

             const user = new UserModel({email,pass:hash,location,age})
             await user.save()
             res.status(200).send({"msg":"Registration has been done"})
        });
    }catch(err){
        res.status(400).send({"msg":err.msg})
    }
})



userRouter.post("/login",async(req,res)=>{
    // const email=req.body.email
    // const pass = req.body.pass
    const{email,pass}=req.body
    try{
        const user = await UserModel.findOne({email})
        // console.log(user);

        if(user) {
            bcrypt.compare(pass,user.pass,(err, result) =>{
            if(result){
                res.status(200).send({"msg":"Login Successfull!","token":jwt.sign({"userID":user._id},"masai")})
                // res.status(200).send({"msg":"Login Sucessfull!","token":jwt.sign({name:"batman"},'ironman',{expiresIn: '1h'})
            }else{
                res.status(400).send({"msg":"Wrong Credentials"})
            }
            });

        } else{
            res.status(200).send({"msg":"No such User Exist "})
        }
    }catch(err){
        res.status(400).send({"msg":err.msg})
    }
})

//restricted route
userRouter.get("/details",(req,res)=>{
    const token = req.headers.authorization
    jwt.verify(token,'ironman',(err,decoded)=>{
        decoded? res.status(200).send("User details") : res.status(400).send({"msg":"Login Require!"})
    });
    
})






module.exports={userRouter}