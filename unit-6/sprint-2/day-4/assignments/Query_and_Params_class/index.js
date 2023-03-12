const express=require("express")
const app=express()
const fs=require("fs")
// app.get("/search",(req,res)=>{
//    if(req.query.songs){
//        res.send(`our movie is ${req.query.songs} ` )

//    }else{
//     res.send("no data available")
//    }
// })

//------------------------------------------------ 
//Find particular data in the db.json
// app.get("/search",(req,res)=>{
    
//     const {direc}=req.query
//     const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
//     const response=data.movies.filter(el=>{
       
//         return el.director===direc
//     })
//      res.json(response[0])
// })

//---------------------------------------------------
app.get("/search",(req,res)=>{
    // const {movie}=req.query
    // const data=JSON.parse(fs.readFileSync("./db,json","utf-8"))
    // const response=data.movies.filter(el=>{
    //     return el.name===movie
    // })
    // if(response.length>0){
    //     res.send(response[0])
    // }else{
    //     res.send("No such data")
    // }
})





//--------Find the Multiple queries-----------------
// app.get("/search",(req,res)=>{

//     console.log(req.query);
//     res.send("hi")
// })

//--------Params------------------------------------

app.get("/search/:id",(req,res)=>{
    const {id}=req.params
    const movie_id=req.params.id
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    const response=data.movies.filter(el=>{
        return el.id==+movie_id
    })
    console.log(response);
    if(response.length>0){
        res.send(response[0])
    }else{
        res.send("No such data")
    }
    
})

app.listen(4000,()=>{
    console.log("server is running");
})