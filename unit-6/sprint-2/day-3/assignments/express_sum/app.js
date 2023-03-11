let express=require("express")


let app=express()


app.use(express.json())


app.get("/",(req,res)=>{
    res.send("home page sum")
})




app.get("/sum",(req,res)=>{
    let {a,b}=req.query
   if(a==undefined&&b==undefined){
    res.status(400)
    res.send({ "error": "Both \"a\" and \"b\" are required parameters" })
   }else{
        a=parseInt(a)
        b=parseInt(b)
        console.log(typeof a,a,typeof b,a)
        if(a&&b||a==0&&b==0){
            res.status(200)
            res.send({sum:Number(`${a+b}`)})
        }else if(a){
            res.status(400)
            res.send({ "error": "\"b\" is not a valid number" })
        }else if(b){
            res.status(400)
            res.send({ "error": "\"a\" is not a valid number" })
        }else {
            res.status(400)
            res.send({ "error": "Both \"a\" and \"b\" must be numbers" })
        }
   }
   
})






app.listen(8080,()=>{
    console.log("server is runnig")
})

module.exports = app;
