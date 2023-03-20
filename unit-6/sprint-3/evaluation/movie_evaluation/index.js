const express=require("express")
const { connection } = require("./db")
const { router } = require("./routes/movie.route")

const app=express()
require("dotenv").config()
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("Home page")
})

app.use("/movie",router)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("server connected to db");
    }catch(err){
        console.log(err);
    }
    console.log("server is running");
})