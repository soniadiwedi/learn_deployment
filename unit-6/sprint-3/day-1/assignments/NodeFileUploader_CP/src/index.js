// import required modules

// export the server
const express=require("express")
const multer = require("multer")
const app=express()
const path=require("path")

const originalPath=path.join(__dirname,"../uploads/")
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,originalPath)
    },
    filename:(req,file,cb)=>{
        cb(null,`${file.originalname}`)
    }
})
const upload=multer({storage:storage})
app.get("/",(req,res)=>{
    res.status(200).send({message:"welcome to server"})
})

app.post("/upload",upload.single("avatar"),(req,res)=>{
    res.status(200).send({
        message:"file uploaded successfully"
    })
})
// app.listen(3000,()=>{
//     console.log("server is running");
// })
module.exports = app;
