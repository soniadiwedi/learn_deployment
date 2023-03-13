// write the routes for /students end poient and add middlewares. const path=require("path")
const express=require("express")
const fs=require("fs")
const {Router}=require("express")
const path=require("path")


// const validator=("")
const router=express.Router()
const db=path.join(__dirname,"../db.json")

router.get("/",(req,res)=>{
    res.send("students")
})

router.get("/:studentCode",(req,res)=>{
    const param=req.params.student_code
    let fileData=fs.readFileSync(db,"utf-8")
    fileData=JSON.parse(fileData)
    const findData=fileData.students.find((e)=>e.student_code==param)
    res.send(JSON.stringify(findData))

})

router.post("/addstudent",(req,res)=>{
    const data=req.body
    let fileData=fs.readFileSync(db,"utf-8")
    fileData=JSON.parse(fileData)
    fileData.students.push(data)
    fs.writeFileSync(db,JSON.stringify(fileData))
    res.send("Student has been added")
})

module.exports=router