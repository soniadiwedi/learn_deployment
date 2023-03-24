const express =require("express")
const{connection} = require("./db")
const { auth } = require("./middleware/auth.middleware")
const { noteRouter } = require("./routes/note.routes")
const { userRouter } = require("./routes/user.routes")
const cors=require("cors")

const app = express()
app.use(cors())
app.use(express.json())
//registartion
app.use("/user", userRouter )
app.use(auth)
app.use("/notes",noteRouter)




app.listen(8080,async()=>{
    try{
        await connection
        console.log("Connected to Mongoose DB");
    }catch(err){
        console.log(err);
    }
    console.log("Server is running at 5500");
})