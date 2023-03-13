// write the routes for /students end poient and add middlewares. const path=require("path")
const express=require("express")
const fs=require("fs")
const {Router}=require("express")
const path=require("path")


const validator=require("../middleware/validator.middleware")

const router=express.Router()
const db=path.join(__dirname,"../db.json")

router.get("/",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    res.send(data.students)
})

// router.get("/:studentCode",(req,res)=>{
//     const param=req.params.student_code
//     let fileData=fs.readFileSync(db,"utf-8")
//     fileData=JSON.parse(fileData)
//     const findData=fileData.students.find((e)=>e.student_code==param)
//     res.send(JSON.stringify(findData))
// })

router.get("/:studentCode",(req,res)=>{
    const {studentCode}=req.params
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    for(let i=0;i<data.students.length;i++){
        if(+data.students[i].student_code===+studentCode){
            res.send(data.students[i])
        }
    }
})

router.post("/addstudent",(req,res)=>{
    const data=req.body
    let fileData=fs.readFileSync(db,"utf-8")
    fileData=JSON.parse(fileData)
    fileData.students.push(data)
    fs.writeFileSync(db,JSON.stringify(fileData))
    res.send("Student has been added")
})


router.use("/",validator)

router.patch("/:studentCode",(req,res)=>{
    const param=req.params.student_code
    let fileData=fs.readFileSync(db,"utf-8")
    fileData=JSON.parse(fileData)
    const finddata=fileData.students.map((el)=>{
        if(el.student_code==param){
            return {...el,...req.body}
        }else{

            return el
        }
    })
    fileData.students=finddata
    fs.writeFileSync(db,JSON.stringify(fileData))
    res.send("Patched Student Details")
})

router.delete("/:studentCode",(req,res)=>{
    const param=req.params.student_code
    let fileData=fs.readFileSync(db,"utf-8")
    fileData=JSON.parse(fileData)
    fileData.student_code=fileData.instructors.filter((el)=> el.student_code===param)
    fs.writeFileSync(db,JSON.stringify(fileData))
    res.send("Deleted Student Details")
})

module.exports=router