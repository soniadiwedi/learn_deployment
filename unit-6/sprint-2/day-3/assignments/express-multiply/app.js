// your code goes here
let express=require("express")


let app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/multiply",(req,res)=>{
   console.log(req.query)
 
   let {a,b}=req.query
   a=parseInt(a)
   b=parseInt(b)

    if(a&b||a==0&&b==0){
        res.status(200)
       res.send({"product":a*b})
     }else if (a){
       
        res.status(400)
        res.send({error:'\"b\" is not a valid number'})
     }else if(b){
        res.status(400)
        res.send({error:'\"a\" is not a valid number'})
     }else{
        res.status(400)
        res.send({
            error: 'Both "a" and "b" are required parameters',
          })
     }


})




module.exports=app


// app.listen(4080,()=>{
//     console.log("server is 4080 running")
// })
