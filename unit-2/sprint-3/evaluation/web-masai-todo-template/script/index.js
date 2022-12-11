// Write all the JS Code related to Home Page Here

let Aform=document.querySelector("form") 
let lsdata=JSON.parse(localStorage.getItem("tasks"))||[];

Aform.addEventListener("submit",function(event){
    event.preventDefault();
    // let taskname=document.querySelector("#name").value;
    // let tasktype=document.querySelector("#type").value;
    // let date=document.querySelector("#date").value;
    // let priority=document.querySelector("#priority").value;
    //console.log("hi")
    let obj={
        taskname,
        tasktype,
        date,
        priority
    }
    if(obj.taskname==""|| obj.tasktype==""||obj.date==""||obj.priority==""){
        alert("please fill form")
    }else{
        lsdata.push(obj)
        localStorage.setItem("tasks",JSON.stringify(lsdata))
    }
})

let tbody=document.querySelector("tbody") //catching table

function displaytable(data){
   
    tbody.innerHTML=null;
    data.forEach(function(element,index){
        let row=document.createElement("tr");

        let name=document.createElement("td");
        name.innerText=element.taskname;

        let type=document.createElement("td");
        type.innerText=element.tasktype;

        let date=document.createElement("td");
        date.innerText=element.date;

        let priority=document.createElement("td");
        priority.innerText=element.priority;

        let complete=document.createElement("td");
        complete.innerText="Completed"

        complete.addEventListener("click",function (){
            addData("task-completed",element)
            deleteData(lsdata,index);
        })

        row.append(name,type,date,priority,complete);
        document.querySelector("tbody").append(row);
    })
}

 function deleteData(data,index){
    data.splice(index,1)
    localStorage.setItem("task",JSON.stringify(data))
    displaytable(data)
 }  
 
 function addData(key,value){
    let newLSdata=JSON.parse(localStorage.getItem(key))||[]
    newLSdata.push(value)
    localStorage.setItem(key,JSON.stringify(newLSdata))

 }
displaytable(lsdata) 

