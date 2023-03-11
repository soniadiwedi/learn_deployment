const express = require("express");
const app =express()
const morgan=require("morgan")

app.use(express.json())


app.use(morgan(':method :status :res[content-length] - :response-time ms :date[web] HTTP/:http-version :url\n'));

app.get('/', (req, res) => {
    res.send('home page');
  });


app.listen(4500, () => {
  console.log('Server  4500');
})




module.exports=app