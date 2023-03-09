const express=require("express")
const fs=require("fs")
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.end("HOME PAGE")
})

app.get("/students",(req,res)=>{
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    // console.log(data);
    res.send(data.students)
})

app.post("/add",(req,res)=>{
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
            data.teachers.push(req.body);
                fs.writeFileSync("./db.json",JSON.stringify(data));
                res.send("data has been added")
})

app.patch("/update",(req,res)=>{
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    for(let i=0;i<data.length;i++){
        if(data.teachers[i].name=="bgih"){
            data.teachers[i].age=req.body.age
        }
    }
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("updated ")
})

app.delete("/deleteteacher",(req,res)=>{
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let newdata=data.teachers.filter(el=>{
        return el.name!=="bgih"
    })
    data.teachers=newdata
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("data has been deleted")
})


app.listen(4500,()=>{
    console.log("server is runing");
})

//------------------------------------------
// const express=require("express")
// const fs = require("fs")
// const cors = require("cors")

// const app = express()
// app.use(express.json())
// app.use(cors());

// app.get("/",(req,res)=>{
//    let data= JSON.parse(fs.readFileSync("./db.json","utf-8"))
//    res.send(data.todo)
// })

// app.post("/add",(req,res)=>{
//     let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     let new_todo={
//         id:data.todo.length + 1,
//         title:req.body.title,
//         completed:req.body.completed
//     }
//     data.todo.push(new_todo);
//     fs.writeFileSync("./db.json",JSON.stringify(data));
//     res.send(new_todo)
// })


// app.patch("/:id",(req,res)=>{
//     const id=req.params.id;
//     let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     let todoIndex = data.todo.findIndex((el)=>el.id==id);
// })


// app.delete("/todos/:id",(req,res)=>{
//     let todoId= parseInt(req.params.id) ;
//     let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     let newTodoList = data.todo.filter(todo => todo.id !== todoId)
//     data.todo=newTodoList
//     fs.writeFileSync("./db.json", JSON.stringify(data))
//     res.send("deleted by id")
// })


// app.listen(4500,()=>{
//     console.log("App running at port 4500");
// })