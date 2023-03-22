const jwt=require("jsonwebtoken")


const authMiddleware=(req,res,next)=>{
    const token=req.headers.authorization
    if(!token){
        res.send("token not found")
    }
    jwt.verify(token,"swati",(err,decoded)=>{
        if(decoded){
            next()
        }else{
            res.send({"msg":"You are not login"})
        }
    })
}


module.exports={authMiddleware}