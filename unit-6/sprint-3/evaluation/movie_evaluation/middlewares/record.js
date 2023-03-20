const fs=require("fs")

const record=(req,res,next)=>{
    const now=new Date()
    const timeStamp=now.toISOString()
    const id=req.params.id
    const {method}=req

    const message=method=='DELETE'?`The Movie with ${id} has been deleted ` : `The Movie with ${id} has been updated`;
    const records= `${message} | ${timeStamp}\n`
    fs.appendFile("records.txt",records,(err)=>{
        if(err){
            console.log("writing error");
        }
    })
    next()
}

module.exports={record}