// create the express app and export it.



// export the app
module.exports=app;

const express=require("express")
const fs=require("fs")
const path=require("path")
const stuRouter=require("./routes/student.route")
const insRouter=require("./routes/instructor.route")
const app=express()

app.use(express.json())
app.use("/instructors",insRouter)
app.use("/students",stuRouter)
// app.listen(9020,()=>{
//     console.log("server is running");
// })