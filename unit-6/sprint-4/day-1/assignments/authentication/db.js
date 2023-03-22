const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://sonia:sonia123@cluster0.reqlnbc.mongodb.net/crud?retryWrites=true&w=majority")



module.exports={connection}