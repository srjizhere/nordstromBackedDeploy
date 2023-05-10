const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    logo:String,
    title:String,
    category:String,
    brand:String,
    type:String,
    price:Number,
    rating:Number,
    Userid:String
})


const CartModel = mongoose.model("cart",cartSchema)

module.exports = {CartModel}