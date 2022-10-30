// Write code related to Home page here 
let HForm=document.querySelector("form");
let data=JSON.parse(localStorage.getItem("task-list"))||[];
HForm.addEventListener("submit",function(e){
    e.preventDefault();
    
    let Taskname=document.getElementById("name").value;
    let des=document.getElementById("desc").value;
    let Sdate=document.getElementById("start").value;
    let Edate=document.getElementById("end").value;
    let preiority=document.getElementById("priority").value;

    let obj={Taskname,des,Sdate,Edate,preiority}
       

    
    if(obj.Taskname==""||obj.des==""||obj.Sdate==""||obj.Edate==""||obj.preiority==""){
        alert("Please fill the details")
    }else{
        data.push(obj)
        localStorage.setItem("task-list",JSON.stringify(data));
    }
   

})