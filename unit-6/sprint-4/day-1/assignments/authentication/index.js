const express=require("express")
const { connection } = require("./db")
const { userRouter, postRouter } = require("./user.routes")

const app=express()


app.use(express.json())
app.use("/users",userRouter)
app.use("/new",postRouter)
app.get("/",(req,res)=>{
    res.status(200).send("Home Page")
})

app.listen(4000,async()=>{
    try{
        await connection
        console.log("server connected to db");
    }catch(err){
        console.log(err);
    }
    console.log("server is running");
})