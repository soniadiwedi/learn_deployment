//  import required modules from nodejs and build the server



// export the server
// eg.module.exports = app;

//  import required modules from nodejs and build the server
const express = require("express");
const todosOpration =require("./controllers/todo.controller")

const app =express()
app.use(express.json())
app.use("/",todosOpration )


// export the server
// eg.module.exports = app;

// app.listen(5000,()=>{
//     console.log("App is running at 5000");
// })

module.exports=app