const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    logo:String,
    title:String,
    category:String,
    type:String,
    brand:String,
    price:Number,
    rating:Number,
    editorID:String,
})
// logo,title,category,type,price,brand
const ProductModel = mongoose.model("product",productSchema)

module.exports = {ProductModel}