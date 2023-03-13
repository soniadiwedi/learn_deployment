// write the routes for /instructors end poient and add middlewares. 
const {Router}=require("express")
const path=require("path")
const fs=require("fs")

// const validator=("")
const router=Router()
const db=path.join(__dirname,"../db.json")

router.get("/",(req,res)=>{
    res.send("instructors")
})

router.get("/:empID",(req,res)=>{
    const param=req.params.empID
    let fileData=fs.readFileSync(db,"utf-8")
    fileData=JSON.parse(fileData)
    const findData=fileData.instructors.find((e)=>e.empID===param)
    res.send(JSON.stringify(findData))
})

router.post("/addinstructor",(req,res)=>{
    const data=req.body
    let fileData=fs.readFileSync(db,"utf-8")
    fileData=JSON.parse(fileData)
    fileData.instructors.push(data)
    fs.writeFileSync(db,JSON.stringify(fileData))
    res.send("Instructor has been added")
})

module.exports=router