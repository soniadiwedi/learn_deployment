
// write the logic for logger middleware and export it.

const morgan=require("morgan")
const fs=require("fs")
const path=require("path")
var accesslog=fs.createWriteStream(path.join(__dirname,"logs.txt"),{
    flags:"a",
})

// app.use(morgan("combined",{stream:accesslog}))


module.exports=accesslog