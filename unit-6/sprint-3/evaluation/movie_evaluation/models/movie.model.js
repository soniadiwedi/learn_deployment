const mongoose=require("mongoose")

const movieSchema=mongoose.Schema({
    movie_name:String,
    genre:String,
    director:String,
    rating:Number,
    year_of_release:Number
},{
    versionKey:false
})

const MovieModel=mongoose.model("moviedata",movieSchema)

module.exports={MovieModel}