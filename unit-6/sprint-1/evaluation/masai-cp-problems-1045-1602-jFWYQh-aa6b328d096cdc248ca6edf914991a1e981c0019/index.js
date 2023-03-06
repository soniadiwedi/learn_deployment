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
    
    res.setHeader("Content-type","text/html")
    res.end("<h1>HOME PAGE</h1>")
  }

  else if(req.url==="/count"){
    const countdata = fs.readFileSync("./data.json","utf-8");
    countdata=JSON.parse(countdata).length;
    const writeFile=`The inital user count is ${userCnt} at ${Date()}\n`
    try{
      fs.writeFile("./logs.txt",writeFile,(err)=>{
        if(err){
          res.end(err)
        }else{
          res.end("The user count has been updated in the logs file")
        }
      })
    }catch(err){
      res.end(err)
    }
 
  }

  else if(req.url=="/update"){
    let hosting=os.hostname();
    let data=fs.readFileSync("./data.json","utf-8")
    data=JSON.parse(data)
    let id=data.length
    let newuser={
      id:id+1,
      first_name:hosting,
      last_name :hosting,
      email:"soniadiwedi@gmail.com",
      gender:"Female"

    }
    data.push(newuser)
    data=JSON.stringify(data)
    fs.writeFile("./data.json",data,(err)=>{
      if(err){
        res.end(err)
      }else{
        userCnt+=1
        const massege=`Updated user count after adding a new user is ${userCnt} at ${Date()}\n`;
        fs.appendFileSync("./logs.txt",massege,"utf-8");
        res.end("The data has been updated, go and check the data file")
      }``
    })
  }

  else if(req.url==="/users"){
    let user=fs.readFileSync("./data.json","utf-8");
    user=JSON.parse(user);

    let pro=user.localeCompare((el)=>{
      return `<li>${el.first_name}</li>`;
    })

    pro=`${user.join("")}`;
    res.setHeader("Content-type","text/html");
    res.write("Following are the users present in database")
    res.write(user)
    res.end()
  }

  else if(req.url=="/address"){
    dns.lookup("masaischool.com",(err,address,family)=>{
      if(err){
        res.end(err)
      }else{
        const addr=`URL:  masaischool.com IP Address: ${address} and family is IPv${family}\n`;
        fs.appendFile("./logs.txt",addr,"utf-8",(err)=>{
          if(err){
            res.end(err)
          }else{
            res.end("Logs File has been updated")
          }
        })
      }
    })
    
  }

  else if(req.url=="/say"){
      try{
        const userdata=fs.readFileSync("./logs.txt","utf-8");
        const cowdata=cowsay.say({
          text:`${userdata}`,
        })
        res.end(cowdata)
      }catch(err){
        res.end(err)
      }
  }

})

// server.listen(4500,()=>{
//   console.log("server is running");
// })

module.exports=server