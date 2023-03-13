// write the routes for /instructors end poient and add middlewares. 
const {Router}=require("express")
const path=require("path")
const fs=require("fs")

const validator=require("../middleware/validator.middleware")
const router=Router()
const db=path.join(__dirname,"../db.json")

router.get("/",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    res.send(data.instructors)
})

// router.get("/:empID",(req,res)=>{
//     const param=req.params.empID
//     let fileData=fs.readFileSync(db,"utf-8")
//     fileData=JSON.parse(fileData)
//     const findData=fileData.instructors.find((e)=>e.empID===param)
//     res.send(JSON.stringify(findData))
// })

router.get("/:empID",(req,res)=>{
    const {empID}=req.params
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    for(let i=0;i<data.instructors.length;i++){
        if(+data.instructors[i].student_code===+empID){
            res.send(data.instructors[i])
        }
    }
})


router.post("/addinstructor",(req,res)=>{
    const data=req.body
    let fileData=fs.readFileSync(db,"utf-8")
    fileData=JSON.parse(fileData)
    fileData.instructors.push(data)
    fs.writeFileSync(db,JSON.stringify(fileData))
    res.send("Instructor has been added")
})

router.use("/",validator)

router.patch("/:empID",(req,res)=>{
    const param=req.params.emp_id
    let fileData=fs.readFileSync(db,"utf-8")
    fileData=JSON.parse(fileData)
    const finddata=fileData.instructors.map((el)=>{
        if(el.emp_id==param){
            return {...el,...req.body}
        }else{

            return el
        }
    })
    fileData.instructors=finddata
    fs.writeFileSync(db,JSON.stringify(fileData))
    res.send(JSON.stringify(fileData))
})


router.delete("/:empID",(req,res)=>{
    const param=req.params.emp_id
    let fileData=fs.readFileSync(db,"utf-8")
    fileData=JSON.parse(fileData)
    fileData.instructors=fileData.instructors.filter((el)=> el.emp_id===param)
    fs.writeFileSync(db,JSON.stringify(fileData))
    res.send("Deleted Student Details")
})

module.exports=router