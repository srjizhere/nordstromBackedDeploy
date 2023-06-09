
const jwt = require("jsonwebtoken")

const authentication = (req,res,next)=>{
    const token = req.headers?.authorization.split(" ")[1]

    if(token){
        const decoded = jwt.verify(token,"hush")
        console.log(decoded)
        if(decoded){
            const Userid  = decoded.Userid;
            req.body.Userid = Userid;
            next()
        }else{
           return res.status(401).send({msg:"please login"})
        }
    }else{
       return res.status(401).send({ msg: "please login" });
    }
}

module.exports = {authentication}