const express =require("express")
const app = express()
const multer=require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

  app.post("/", upload.single('avatar'),(req,res)=>{
    res.send("Hello")

})


app.listen(4600,()=>{
    console.log("server is running in 4600");
})