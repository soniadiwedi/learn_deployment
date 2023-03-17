const express=require("express")
const { connection } = require("./db")
const { todoRouter } = require("./routes/todo.routes")
const app=express()
require("dotenv").config()

app.use(express.json())


app.get("/",(req,res)=>{
    res.status(200).send({"msg":"Home Page"})
})

app.use("/todos",todoRouter)


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Mongo is connected ");
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
    console.log("server is running");
})