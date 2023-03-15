//  import required modules from nodejs and build the server

// export the server

const express=require("express")
const app=express()
const validatorfunction=require("./middlewares/validator")
app.use(express.json())

app.use(validatorfunction)

app.post("/",validatorfunction,(req,res)=>{
    res.status(200).send("data received")
})


app.listen(4000,()=>{
    console.log("server is running")
})

module.exports=app