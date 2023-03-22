const mongoose = require("mongoose");

const productSchema=mongoose.Schema({
    name:String,
    desc:String,
    price:Number
})

const userSchema=mongoose.Schema({
    email:String,
    password:String,
    location:String,
    age:Number
})

const ProductModel=mongoose.model("product",productSchema)
const UserModel=mongoose.model("User",userSchema)

module.exports={ProductModel,UserModel}