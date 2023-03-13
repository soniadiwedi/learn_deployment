
// write the logic for validation middleware.

const validator=(req,res,next)=>{
    const {role,password}=req.query
    if(role && password){
        if(role==admin||instructor && password=="7877"){
            next()
        }else{
            res.send("You are not authorised to do this operation")
        }
    }else{
        res.send("You are not authorised to do this operation")
    }
}

module.exports=validator