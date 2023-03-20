const express=require("express")
const { connection } = require("./db")

const app=express()
require("dotenv").config()
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("Home page")
})


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("server connected to db");
    }catch(err){
        console.log(err);
    }
    console.log("server is running");
})