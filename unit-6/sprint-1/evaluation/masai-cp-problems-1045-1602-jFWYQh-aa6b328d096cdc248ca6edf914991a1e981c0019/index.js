const http = require("http");
const fs = require("fs");
const os = require("os");
const dns = require("node:dns");
const cowsay = require("cowsay");

let userCnt = 0; //To count the number of users

//" make the server function and export";

  //Handling the home route, send an h1 tag
 
  //counting the number of users and writing the initial number in the logs.txt along with the time stamp
 
    
  
  //updating the user database
 
    //should append updated number of users in logs.txt along with the time stamp

  //get the first names of all the users from the json file and send as a response in list format

  //to get the website url from terminal and write its ip address and family in logs.txt
 
  // using the cowsay external module
  



// Do not listen to the server just export(default) it

const server=http.createServer((req,res)=>{
  if(req.url==="/"){
    // res.writeHead(200,{"Content-type":"text/html"})
    // res.write("<h1>Home Page </h1>")
    res.setHeader("Content-type","text/html")
    res.end("<h1>Home Page </h1>")
  }

  else if(req.url==="/count"){
    const count =require("./data.json").length;
    const logtext=`The inital user count is ${count} at ${new Date()}`
    fs.appendFile("logs.txt",logtext,(err)=>{
      if(err){
        res.end(err);
      }else{
        res.setHeader("Content-type","text/plain");
        res.end("The user count has been updated in the logs file")
      }
    })
  }

  else if(req.url=="/update"){
    fs.readFile(path.join(_dirname,"data.json"),"utf-8",(err,data)=>{
      if(err){
        res.end(err)
      }else{
        res.write("The data has been updated, go and check the data file")
        res.end(data)
      }
    })
  }

  else if(req.url==="/users"){

  }

  else if(req.url=="/address"){
    let host=req.headers.host
    console.log(host);
  }

  // else if(req.url=="/say"){

  // }

})

// server.listen(4500,()=>{
//   console.log("server is running");
// })