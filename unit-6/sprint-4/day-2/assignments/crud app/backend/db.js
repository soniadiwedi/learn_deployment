const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://soniadiwedi1998:sonia123@cluster0.ehekis1.mongodb.net/crud?retryWrites=true&w=majority")

module.exports={connection}