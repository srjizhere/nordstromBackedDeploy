
const express =  require("express")
const cartRouter = express.Router();

const {CartModel} = require("../model/cart.model.js");

cartRouter.get("/",async(req,res)=>{
    const Userid = req.body.Userid   // got from middleware 
    const data = await CartModel.find({"Userid":Userid})
    res.send(data)
})


cartRouter.post("/post",async (req,res)=>{
    const Userid= req.body.Userid;
    try {
                    const new_cart = new CartModel({
                     logo:req.body.logo,
                    title:req.body.title,
                    category:req.body.category,
                    type:req.body.type,
                    price:req.body.price,
                    rating:req.body.rating,
                    Userid:Userid,
                    
                        });

                await new_cart.save();
                              
       return res.send({"msg" : "added to cart successfully"});
    } catch (error) {
        console.log(error)
        res.send({"err" : "Something went wrong"})
    }
    })

    

cartRouter.delete("/delete",async(req,res)=>{
    try {
        //const cartID = req.params.cartID
    const Userid = req.body.Userid

     await CartModel.deleteMany({"Userid":Userid})

   
        res.send("item deleted successfully")
    
    } catch (error) {
        console.log(error)
    } 
})

module.exports = {cartRouter}