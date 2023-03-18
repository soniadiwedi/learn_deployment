const mongoose = require("mongoose")




const connection = mongoose.connect("mongodb://127.0.0.1:27017/movieData")

const movieSchema = mongoose.Schema({

    Title:String,
    Year:Number,
    Rating:Number,
    Genre:String,
    Language:String

},{
    versionKey:false
})

const MovieModel = mongoose.model("movie",movieSchema)

module.exports={connection,MovieModel}