// create the express app and export it.



// export the app


const express=require("express")
const fs=require("fs")
const path=require("path")
const logger=require("./middleware/logger.middleware")
 
const stuRouter=require("./routes/student.route")
const insRouter=require("./routes/instructor.route")
const app=express()


app.use(express.json())
app.use("/",logger)
app.use("/instructors",insRouter)
app.use("/students",stuRouter)
// app.listen(9020,()=>{
//     console.log("server is running");
// })

module.exports=app;